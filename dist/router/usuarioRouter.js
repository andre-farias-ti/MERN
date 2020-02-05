"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioService_1 = require("../service/usuarioService");
exports.usuarioRouter = express_1.Router();
exports.usuarioRouter.get("/id/:id", async (req, res) => {
    const usuario = await usuarioService_1.UsuarioService.consultar(req.params.id);
    res.json(usuario);
});
exports.usuarioRouter.get("/", async (req, res) => {
    const usuarios = await usuarioService_1.UsuarioService.listar(req.query);
    res.json(usuarios);
});
exports.usuarioRouter.get("/salvar", async (req, res) => {
    await usuarioService_1.UsuarioService.criar(req.query);
});
exports.usuarioRouter.get("/remover/:id", async (req, res) => {
    const usuario = await usuarioService_1.UsuarioService.remover(req.params.id);
    res.json(usuario);
});
//# sourceMappingURL=usuarioRouter.js.map