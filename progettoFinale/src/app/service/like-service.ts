import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LikeDto, LikeFormDto } from '../model/like-model';
import { Observable } from 'rxjs';
import { PageResponse } from '../model/pageResponse-model';
import { PostDto } from '../model/post-model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  
      private apiUrl = 'http://localhost:8080/api/like';

            
  listaLike: LikeDto[] = [];

  constructor(private http: HttpClient){}

  allLikeByPost(id:number): Observable<PageResponse<LikeDto>> {
    const params = new HttpParams().set('id', id);
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get<PageResponse<LikeDto>>(this.apiUrl + "/post" , {params, headers}); //da controllare le rotte di tutti i service
  } 
  getMyLikedPost(): Observable<PageResponse<LikeDto>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get<PageResponse<LikeDto>>(this.apiUrl + "/my" , {headers}); //da controllare le rotte di tutti i service
  } 
  deleteLike(id: number): Observable<unknown> {
    const body =  {id: id};
    return this.http.delete<void>(this.apiUrl, {body});
  }

  creaLike(like: LikeFormDto):Observable<LikeDto>{
    return this.http.post<LikeDto>(this.apiUrl, like)
  }
}