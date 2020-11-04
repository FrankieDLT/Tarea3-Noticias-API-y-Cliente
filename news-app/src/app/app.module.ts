import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './pages/news/news.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { Page404Component } from './pages/page404/page404.component';
import { TitularesComponent } from './pages/titulares/titulares.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { GridListComponent } from './globals/components/grid-list/grid-list.component';
import { SignupComponent } from './pages/signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    CommentsComponent,
    Page404Component,
    TitularesComponent,
    HeaderComponent,
    GridListComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
