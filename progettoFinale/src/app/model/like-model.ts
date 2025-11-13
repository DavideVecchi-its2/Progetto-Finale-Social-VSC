import { PostDto } from "./post-model";
import { UtenteDto } from "./utente-model";

export class LikeDto{
    id!: string;
    utente!:UtenteDto;
    post!: PostDto;
    dataOra!:string;
    createdAt!:string;
    updatedAt!:string;
}

export class LikeFormDto{
    id!: string;
    utente!:UtenteDto;
    post!: PostDto;
    dataOra!:string;   
}

