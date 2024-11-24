import express from "express";
import routes from "./src/routes/postsRoutes.js";

const PORT = 5000;
const app = express();
app.use(express.static('uploads'));
routes(app);

app.listen(PORT, () => { 
    console.log(`server running on port ${PORT}`);
});
