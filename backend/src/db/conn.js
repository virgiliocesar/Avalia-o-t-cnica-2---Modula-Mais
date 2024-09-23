import mongoose from "mongoose";

async function main(options) {
    try {
        await mongoose.connect("mongodb://localhost:27017/avaliacao2");
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB:", error);
    }
}

export default main