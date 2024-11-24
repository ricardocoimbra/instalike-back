import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function extrairDescricao(textoCompleto) {
    const indiceDoisPontos = textoCompleto.indexOf(':');
    return textoCompleto.substring(indiceDoisPontos + 2);
}

export async function gerarDescricaoComGemini(imageBuffer) {
    const prompt = "Gere um descrição curta em portugues do brasil para a seguinte imagem"

    try {
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png",
            },
        };
        const res = await model.generateContent([prompt, image]);

        const descricaoCompleta = res.response.text();
        return extrairDescricao(descricaoCompleta) || "Descrição não disponível.";

        // return res.response.text() || "Descrição não disponível.";
    } catch (error) {
        console.error(error);
        throw new Error("Ocorreu um erro ao gerar a descrição.");
    }
}

export async function gerarTextoAlternativoComGemini(imageBuffer) {
    const prompt = "Gere um Alt-text em portugues do brasil para a seguinte imagem"

    try {
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png",
            },
        };
        const res = await model.generateContent([prompt, image]);
        const altTextCompleto  = res.response.text();
        return extrairDescricao(altTextCompleto) || "Alt-text não disponível.";
    } catch (error) {
        console.error(error);
        throw new Error("Ocorreu um erro ao gerar o alt-text.");
    }
}