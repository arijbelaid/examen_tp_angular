import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostList } from './components/post-list/post-list';
import { Login } from './pages/login/login';
export const routes: Routes = [
     { path: '', component: PostList },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}