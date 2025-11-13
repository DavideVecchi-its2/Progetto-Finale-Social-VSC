import { PermessoDto } from "./permesso-model";

export class GruppoPermessiRequest{
    id!:number;
    permessi!:PermessoDto[];
}