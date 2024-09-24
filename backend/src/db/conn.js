import mongoose from "mongoose";

async function main(options) {
    try {
        await mongoose.connect(
          "mongodb+srv://virgilio:ovb7yJShR5lgNoOc@cluster0.8mno9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB:", error);
    }
}

export default main