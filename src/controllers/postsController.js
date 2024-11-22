import fs from "fs";
import { getTodosPosts, criarPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    try {
        const posts = await getTodosPosts();
        res.status(200).send(posts);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Ocorreu um erro ao buscar os posts." });
    }
}

export async function postarNovoPost(req, res) {
    const post = req.body;
    try {
        const postCriado = await criarPost(post);
        res.status(201).send(postCriado);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Ocorreu um erro ao criar o post." });
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(201).send(postCriado);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Ocorreu um erro ao criar o post." });
    }
}