import { GruppoDto } from "./gruppo-model";
import { PermessoRuoloDto } from "./permessoRuolo-model";

export class PermessoDto{
    id !: string;
    alias !: string;
    nome !: string;
    gruppo !: GruppoDto; 
    permessiRuoli !: PermessoRuoloDto[];
    createdAt!:string;
    updateAt!:string;
}

export class PermessoFormDto{
    id ?: string;
    alias !: string;
    nome !: string;
    gruppo !: GruppoDto; 
}