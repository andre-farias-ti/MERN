import {Usuario, UsuarioModel} from "../model/usuario";
import { promises } from "fs";

export class UsuarioService {
    static listar(query?: any): Promise<Usuario[]>{
        return UsuarioModel.find(query).exec();
    }

    static consultar(id: string): Promise<Usuario | null>{
        return UsuarioModel.findById(id).exec();
    }

    static criar(usuario: Usuario) : Promise<Usuario | null>{
        const model = new UsuarioModel(usuario);
        return model.save();
    } 

    static atualizar(id: string, usuario: Usuario) : Promise<Usuario | null>{
        return UsuarioModel.update({id:id}, usuario).exec()
    } 

    static async remover(id: string) : Promise<Usuario | null>{
        const usuario = await this.consultar(id);
        if(usuario === null){
            throw "usuário não encontrado"
        }
        await usuario.remove();
        return usuario;
    }

    static listarId(id: string) : Promise<Usuario | null>{
        return UsuarioModel.findById({id:id}).exec()
    } 
}