import { Document } from "mongoose";
export interface Usuario extends Document {
    username: string;
    password: string;
    phoneNumber: string;
    address: string;
}
export declare const UsuarioModel: import("mongoose").Model<Usuario, {}>;
