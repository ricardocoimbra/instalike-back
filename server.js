import express from "express";

const PORT = 3000;
const app = express();

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

app.get("/api", (req, res) => {
    res.status(200).send("Bem vindos a Imersão!");
});