// src/app/services/post.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Post { id: string; titre: string; contenu: string; }

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postList: Post[] = [
    { id: '1', titre: "Premier post",  contenu: 'détails premier post' },
    { id: '2', titre: "Deuxième post", contenu: 'détails deuxième post' },
    { id: '3', titre: "Troisième post", contenu: 'détails troisième post' },
  ];

  constructor(private http: HttpClient) {}
   private apiUrl = 'http://localhost:3000/postList'; // ou URL réelle
  getPosts(): Observable<Post[]> {
    return of(this.postList);
  }

  // méthodes CRUD (optionnelles)
  getPost(id: string) { return of(this.postList.find(p => p.id === id)); }
  addPost(p: Post) { this.postList.push(p); return of(p); }
  updatePost(updated: Post) {
    const i = this.postList.findIndex(p => p.id === updated.id);
    if (i > -1) this.postList[i] = updated;
    return of(updated);
  }
  deletePost(id: string) {
    this.postList = this.postList.filter(p => p.id !== id);
    return of(null);
  }
}
