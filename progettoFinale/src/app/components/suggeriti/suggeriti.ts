import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { UtenteDto } from '../../model/utente-model';
import { UtentiService } from '../../service/utenti-service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-suggeriti',
  imports: [ButtonModule],
  templateUrl: './suggeriti.html',
  styleUrl: './suggeriti.css',
})
export class Suggeriti {

    listaUtenti: UtenteDto [] = [] ;
  private cdr = inject(ChangeDetectorRef);
    constructor(private utentiService: UtentiService){}

ngOnInit() {
  this.loadSuggeriti();
}
    
async loadSuggeriti(){
  try {
    let response = await lastValueFrom(this.utentiService.getAllUtenti())
    console.log(response)
    this.listaUtenti=response;
  } catch (error) {}
  this.cdr.detectChanges();    
}
}
