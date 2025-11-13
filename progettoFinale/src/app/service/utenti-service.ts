import { Injectable } from '@angular/core';
import { UtenteDto, UtenteFormDto } from '../model/utente-model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  private apiUrl = 'http://localhost:8080/api/utenti';

  listaUtenti: UtenteDto[] = [];

  constructor(private http: HttpClient){}

  getAllUtenti(): Observable<UtenteDto[]> {
       const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get<UtenteDto[]>(this.apiUrl + "/tutti",{headers});
  } 

  getUtenteById(id: number): Observable<unknown> {
    const params = new HttpParams().set('id', id);
    return this.http.get<UtenteDto>(this.apiUrl, {params});
  }
  deleteUtente(id: number): Observable<unknown> {
    const body =  {id: id};
    return this.http.delete<void>(this.apiUrl, {body});
  }

  creaUtente(utente: UtenteFormDto):Observable<UtenteDto>{
    return this.http.post<UtenteDto>(this.apiUrl, utente)
  }
}
