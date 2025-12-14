import { PostDto } from "./post-model";
import { UtenteDto } from "./utente-model";

export interface LikeDto{
    id: string;
    utente:UtenteDto;
    post: PostDto;
    dataOra:string;   
}

export interface LikeFormDto{
    id: string;
    utente:UtenteDto;
    post: PostDto;
    dataOra:string;   
}

