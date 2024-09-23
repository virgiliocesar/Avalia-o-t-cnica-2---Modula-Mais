import express from "express";
// import mongoose from "mongoose";
import cors from "cors";
import app from express();

app.use(cors());

//^ Permite comunicação de dados via json
app.use(express.json());

//* DB connection