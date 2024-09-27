import express from "express";
import cors from "cors";
import conn from "./db/conn.js";
import animalsRoutes from "./routes/animalsRoutes.js";

const app = express();
app.use(cors());

//? Permite comunicação de dados via json
app.use(express.json());

//? DB connection
conn();

//? Routes
app.use("/api/animals", animalsRoutes);

app.get("/", (req, res) => {
  res.redirect("/api/animals");
});

app.listen(process.env.PORT, () => {
  console.log("Servidor online");
});

