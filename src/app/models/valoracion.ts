import { User } from "./user";

export class Valoracion {
    _id?: number;
    puntuacion: Number;
    user: string | undefined;
    description: string;
    identificador: string;

    constructor(puntuacion: Number, description: string, identificador: string, user?: string) {
        this.puntuacion = puntuacion;
        this.description = description;
        this.identificador = identificador;
        this.user = user;
    }   
}