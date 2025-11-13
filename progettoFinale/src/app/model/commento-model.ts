import { PostDto } from "./post-model";
import { UtenteDto } from "./utente-model";

export class CommentoDto{
    id!: string;
    post!: PostDto;
    utente!:UtenteDto;
    dataOra!:string;
    testo!: string;
    createdAt!:string;
    updatedAt!:string;
}

export class CommentoFormDto{
    id?: string;
    post!: PostDto;
    utente!:UtenteDto;
    dataOra!:string;
    testo!: string;
}
