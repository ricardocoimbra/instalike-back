import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://coimbrarico:kzhRLyjcS9qulSRR@cluster0.kx9no.mongodb.net/imersao-instabytes?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true';

const client = new MongoClient(uri);

async function testConnection() {
  try {
    console.log('Tentando conectar ao banco de dados...');
    await client.connect();
    console.log('Conexão bem-sucedida ao banco de dados!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } finally {
    await client.close();
  }
}

testConnection();