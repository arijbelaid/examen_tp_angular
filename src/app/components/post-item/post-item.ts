import { Component ,Input  } from '@angular/core';
import { Post } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-item',
  imports: [CommonModule],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css',
   template: `
    <h5>{{post.titre}}</h5>
    <p>{{post.contenu}}</p>
  `
})
export class PostItem {
  @Input() post!: Post;

}
