import express from "express";
// import conn from "./db/conn";
import cors from "cors";

const app = express();

app.use(cors());

//^ Permite comunicação de dados via json
app.use(express.json());

//* DB connection
// conn();

app.listen(3000, function () {
  console.log("Servidor online");
});

//* virgio ovb7yJShR5lgNoOc