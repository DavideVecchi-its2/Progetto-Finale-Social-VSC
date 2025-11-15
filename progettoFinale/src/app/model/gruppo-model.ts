import { PermessoDto } from "./permesso-model";

export class GruppoDto{
    id!:number;
    nome!:string;
    alias!:string;
    permessi!: PermessoDto[];
    createdUp!:string;
    updatedUp!:string;
}


export class GruppoFormDto{
    id?:number;
    nome!:string;
    alias!:string;
}

