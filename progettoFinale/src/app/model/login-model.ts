import { GruppoDto } from "./gruppo-model";
import { PermessoDto } from "./permesso-model";
import { RuoloDto } from "./ruolo-model";

export class LoginResponse{
    token!:string;
    email!:string; 
    nome!:string; 
    cognome!:string; 
    ruoli!:RuoloDto[];
    permessi!:PermessoDto[]; 
    gruppi!:GruppoDto[]
}


export class LoginRequest{
    password!:string;
    email!:string;
}