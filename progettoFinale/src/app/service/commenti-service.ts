import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentoDto, CommentoFormDto } from '../model/commento-model';
import { PageResponse } from '../model/pageResponse-model';

@Injectable({
  providedIn: 'root'
})
export class CommentiService {
      private apiUrl = 'http://localhost:8080/api/commenti';

      
  listaCommenti: CommentoDto[] = [];

  constructor(private http: HttpClient){}

  getAllCommenti(): Observable<PageResponse<CommentoDto>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get<PageResponse<CommentoDto>>(this.apiUrl,{headers});
  } 
  getCommentoById(id: number): Observable<unknown> {
    const params = new HttpParams().set('id', id);
    return this.http.get<CommentoDto>(this.apiUrl, {params});
  }
    getCommentiByPost(id: number): Observable<PageResponse<CommentoDto>> {
    const body =  {id: id};
     const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get<PageResponse<CommentoDto>>(this.apiUrl , {headers});
  }
  deleteCommento(id: number): Observable<unknown> {
    const body =  {id: id};
    return this.http.delete<void>(this.apiUrl, {body});
  }

  creaCommento(commento: CommentoFormDto):Observable<CommentoDto>{
    return this.http.post<CommentoDto>(this.apiUrl, commento)
  }
}

