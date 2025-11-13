import { CommentoDto } from "./commento-model";
import { LikeDto } from "./like-model";
import { UtenteDto } from "./utente-model";

export class PostDto{
    id!:number;
    utente!:UtenteDto;
    dataOra!:string;
    contenuto!:string;
    listaCommenti?:CommentoDto[];
    listaLike?:LikeDto[];
    createdAt!:string;
    updatedAt!:string;
}

export class PostFormDto{
    id?:number;
    utente!:UtenteDto;
    dataOra!:string;
    contenuto!:string;
}
