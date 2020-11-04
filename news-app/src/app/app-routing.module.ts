import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './pages/comments/comments.component';
import { NewsComponent } from './pages/news/news.component';
import { Page404Component } from './pages/page404/page404.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TitularesComponent } from './pages/titulares/titulares.component';

const routes: Routes = [
  {path: '',redirectTo: 'recientes',pathMatch: 'full'},
  {path: 'not',redirectTo: 'noticias',pathMatch: 'prefix'},
  {path: 'noticias', component: NewsComponent},
  {path: 'noticias/:id', component: CommentsComponent},
  {path: 'comentarios',component: CommentsComponent},
  {path: 'recientes',component: TitularesComponent},
  {path: 'signup',component: SignupComponent},
  {path: '**',component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
