import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const stringConexao = process.env.STRING_CONEXAO;

if(!stringConexao){
    console.error("Nenhuma string de conexão foi encontrada no arquivo .env");
    process.exit();
}

const mongoClient = new MongoClient(stringConexao);

export default async function conectarAoBanco(){
    try{
        console.log("Conectando ao cluster do banco de dados...");
        await mongoClient.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso!");
        return mongoClient;
    }catch(erro){
        console.error('Falha na conexão com o banco de dados', erro);
        throw erro;
        process.exit();
    }
}