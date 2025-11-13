import { PermessoDto } from "./permesso-model";
import { RuoloDto } from "./ruolo-model";

export class PermessoRuoloDto{
    id!:number;
    ruolo!: RuoloDto;
    permesso!: PermessoDto;
}

export class RuoloPermessoRequest{
    idRuolo!: string;
    permesso!: PermessoDto;
}

