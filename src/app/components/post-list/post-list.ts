import { Component } from '@angular/core';
import { PostItem } from '../post-item/post-item';
import { CommonModule } from '@angular/common';
import { PostService, Post } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
 imports: [CommonModule, PostItem],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {
   posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => {
        console.error('Erreur en récupérant les posts', err);
        this.posts = [];
      }
    });
  }

}
