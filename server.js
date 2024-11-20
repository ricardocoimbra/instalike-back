import express from "express";

const PORT = 5000;
const app = express();
app.use(express.json());

const posts = [
    { 
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 3,
        descricao: "Gato preguiçoso",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 4,
        descricao: "Cachorro brincando",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 5,
        descricao: "Paisagem natural",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 6,
        descricao: "Comida deliciosa",
        imagem: "https://placecats.com/millie/300/150",
    },
];

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

app.get("/api", (req, res) => {
    res.status(200).send("Bem vindos a Imersão!");
});

app.get("/posts", (req, res) => {
    res.status(200).send(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).send(posts[index]);
});

