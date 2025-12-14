import { SafeUrl } from "@angular/platform-browser";
import { CommentoDto } from "./commento-model";
import { LikeDto } from "./like-model";
import { UtenteDto } from "./utente-model";

export interface  PostDto{
  id: number;
  utente: UtenteDto;
  dataOra: string;
  contenuto: string;
  immagine?: string | SafeUrl;

  listaCommenti?: CommentoDto[];

  listaLike?:LikeDto[];
  likeCount: number;
  liked?: boolean;
  commentiVisibili?: boolean;
}


export interface PostFormDto{
    id:number;
    utente:UtenteDto;
    immagine?:string | SafeUrl | undefined;
    dataOra:string;
    contenuto:string;
}
