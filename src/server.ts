import express, {Application, Request, Response} from "express";
import {connect} from "mongoose";
import { usuarioRouter } from "./router/usuarioRouter";
import { NextFunction } from "connect";
import bodyParser = require("body-parser");
import cors from "cors";


const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req: Request, res:Response, next:NextFunction) => {
    console.log('middleware', new Date());
    next();
});

app.use("/usuarios",usuarioRouter);

app.listen(9090, async () => {
    await connect("mongodb://localhost:27017/iesp");
    console.log("Servidor Rodando");
});

export default app;