"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const usuarioRouter_1 = require("./router/usuarioRouter");
const bodyParser = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(bodyParser.json());
app.use(cors_1.default());
app.use((req, res, next) => {
    console.log('middleware', new Date());
    next();
});
app.use("/usuarios", usuarioRouter_1.usuarioRouter);
app.listen(9090, async () => {
    await mongoose_1.connect("mongodb://localhost:27017/iesp");
    console.log("Servidor Rodando");
});
exports.default = app;
//# sourceMappingURL=server.js.map