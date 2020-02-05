import supertest from "supertest";
import mockingoose from "mockingoose"
import {UsuarioModel} from "../model/usuario";
import app from "../server";
test("[GET] /usuarios", async ()=>{
    const mockusuarios = [{
        _id:"5e23452c7aa7ca1844e5ecfa",
        username:"anderson",
        password:"leal"
    }];
    mockingoose(UsuarioModel)
        .toReturn(mockusuarios, "find");
     const response = await supertest (app).get("/usuarios");
     expect(response.text).toBe(JSON.stringify(mockusuarios));  
} );
