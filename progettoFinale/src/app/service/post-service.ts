import { Injectable } from '@angular/core';
import { PostDto, PostFormDto } from '../model/post-model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PageResponse } from '../model/pageResponse-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
      private apiUrl = 'http://localhost:8080/api/post';

            
  listaCommenti: PostDto[] = [];

  constructor(private http: HttpClient){}

  getAllPost(): Observable<PageResponse<PostDto>> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get<PageResponse<PostDto>>(this.apiUrl ,{headers}); //da controllare le rotte di tutti i service
  } 
  getPostById(id: number): Observable<unknown> {
    const params = new HttpParams().set('id', id);
    return this.http.get<PostDto>(this.apiUrl, {params});
  }
  deletePost(id: number): Observable<unknown> {
    const body =  {id: id};
    return this.http.delete<void>(this.apiUrl, {body});
  }

  creaPost(post: PostFormDto):Observable<PostDto>{
    return this.http.post<PostDto>(this.apiUrl, post)
  }
}
