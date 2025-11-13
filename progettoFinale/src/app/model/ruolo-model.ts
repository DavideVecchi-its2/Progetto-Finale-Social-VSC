import { PermessoRuoloDto } from "./permessoRuolo-model";

export class RuoloDto{
    id!:number;
    nome!: string;
    alias!:string;
    listaPermessi?:PermessoRuoloDto[];
    createdAt!:string;
    updatedAt!:string;
}



export class RuoloFormDto{
    id?:number;
    nome!: string;
    alias!:string;
}