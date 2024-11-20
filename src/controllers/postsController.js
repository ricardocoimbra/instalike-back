import { getTodosPosts } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    try {
        const posts = await getTodosPosts();
        res.status(200).send(posts);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Ocorreu um erro ao buscar os posts." });
    }
}   