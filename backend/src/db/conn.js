import mongoose from "mongoose";

async function main() {
    try {
        // mongoose.set("strictQuery", true);
        await mongoose.connect(
          process.env.MONGO_DB,
        );
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log("Erro ao conectar ao MongoDB:", error);
    }
}

export default main