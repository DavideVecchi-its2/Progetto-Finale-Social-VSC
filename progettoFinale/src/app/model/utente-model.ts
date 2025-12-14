import { CommentoDto } from "./commento-model";
import { LikeDto } from "./like-model";
import { PostDto } from "./post-model";
import { RuoloDto } from "./ruolo-model";

export class UtenteDto{
    id!:number;
    nome!: string;
    cognome!: string;
    codicefiscale!: string;
    email!:string;
    dataNascita!: string;
    telefono?: string;
    indirizzo?: string;
    ruolo!:RuoloDto;
    listaPost?:PostDto[];
    listaCommenti?:CommentoDto[];
    listaLike?:LikeDto[];
    createdAt!:string;
    updatedAt!:string;
    avatar!:string | null | undefined;
}

export class UtenteFormDto{
    id?:number;
    nome!: string;
    cognome!: string;
    codicefiscale!: string;
    email!:string;
    dataNascita!: string;
    telefono?: string;
    indirizzo?: string;
    
}
