import express from "express";
import conn from "./db/conn.js";
import cors from "cors";
import router from "./routes/router.js";
const app = express();

app.use(cors());

//? Permite comunicação de dados via json
app.use(express.json());

//? DB connection
conn();

//? Routes
app.use("/api", router);

app.listen(3000, function () {
  console.log("Servidor online");
});

//! virgio ovb7yJShR5lgNoOc