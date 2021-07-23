import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import path from "path";
import globalRouter from "./routers/globalRouter";
import connect from "../db";

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.set(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connect();

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log(`🥕http://localhost${PORT}, Ruby Talk Express Framework Server Start `)
});