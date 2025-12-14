import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ImageModule } from "primeng/image";
import { ButtonModule } from "primeng/button";
import { PostDto } from '../../model/post-model';
import { Router } from '@angular/router';
import { PostService } from '../../service/post-service';
import { CommentiService } from '../../service/commenti-service';
import { CommentoDto } from '../../model/commento-model';
import { lastValueFrom } from 'rxjs';
import { LikeDto } from '../../model/like-model';
import { LikeService } from '../../service/like-service';

@Component({
  selector: 'app-post',
  imports: [ImageModule, ButtonModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {

  listaPost: PostDto [] = [] ;
  listaCommenti: CommentoDto [] = [] ;
  listaLike: LikeDto [] = [] ;
  
  private cdr = inject(ChangeDetectorRef);

     constructor(private router: Router, private postService: PostService, private commentiService: CommentiService, private likeService: LikeService){}

    async mostra(post: any) {
  if (post.commentiVisibili) {
    post.commentiVisibili = false;
    return;
  }
  post.commentiVisibili = true;
  if (!post.listaCommenti) {
    try {
      let response = await lastValueFrom(this.commentiService.getCommentiByPost(post.id));
      console.log(response);
      post.listaCommenti = response.contenuto;
    } catch (error) {
      console.error('Errore caricamento commenti', error);
      post.listaCommenti = [];
    }
      this.cdr.detectChanges();    
    }
  }

  toggleLike(post: any) {
  post.liked = !post.liked;
  post.likeCount += post.liked ? 1 : -1;

  if (post.liked) {
    this.likeService.creaLike(post.id);
  } else {
    this.likeService.deleteLike(post.id);
  }
  
}
mapLikeState() {
  const likedPostIds = new Set(
    this.listaLike.map(like => like.post.id)
  );

  this.listaPost = this.listaPost.map(post => ({
    ...post,
    liked: likedPostIds.has(post.id),
  }));
}
ngOnInit() {
  this.loadTutto();
}

async loadTutto(){
  
  try {
    let response = await lastValueFrom(this.postService.getAllPost())
    console.log(response)
    this.listaPost=response.contenuto;
  } catch (error) {}
  try {
    let response = await lastValueFrom(this.likeService.getMyLikedPost())
    console.log(response)
    this.listaLike=response.contenuto;
  } catch (error) {
    
  }
    this.mapLikeState();

    this.cdr.detectChanges();    
}
}
