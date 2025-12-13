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
  idPost: number = 0;
  listaPost: PostDto [] = [] ;
  listaCommenti: CommentoDto [] = [] ;
  listaLike: LikeDto [] = [] ;
  
  private cdr = inject(ChangeDetectorRef);

     constructor(private router: Router, private postService: PostService, private commentiService: CommentiService, private likeService: LikeService){}

    async mostra(id: number) {
    if(this.idPost===id){
      this.idPost=0;
    }
    else {
      let response = await lastValueFrom(this.commentiService.getCommentiByPost(id));
      console.log(response);
      this.listaCommenti=response.contenuto;
      
      this.idPost=id;
      this.cdr.detectChanges();    
    }

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
    this.cdr.detectChanges();    
}
}
