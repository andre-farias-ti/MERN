import { Request, Response, Router } from "express";
import {Usuario} from "../model/usuario";
import {UsuarioService} from "../service/usuarioService"
import { Code } from "mongodb";

export const usuarioRouter = Router();


usuarioRouter.get("/:id", async (req: Request, res: Response) => {
        const usuario : Usuario | null = 
                    await UsuarioService.consultar(req.params.id);
        res.json(usuario)  
});

usuarioRouter.get("/", async (req: Request, res: Response) => {
    const usuarios : Usuario [] =
                await UsuarioService.listar(req.query);

    res.json(usuarios)
});

usuarioRouter.post("/", async (req: Request, res: Response) => {
        await UsuarioService.criar(req.body.user);
});

usuarioRouter.delete("/:id", async (req: Request, res: Response) => {
    const usuario : Usuario | null = 
        await UsuarioService.remover(req.params.id);

    res.json(usuario);
});