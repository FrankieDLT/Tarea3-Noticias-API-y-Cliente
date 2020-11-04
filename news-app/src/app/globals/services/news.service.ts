import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { ajax } from './services/ajax.js';
import {ajax} from './ajax.js'
declare var Handlebars:any;

import {environment} from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news =  [
    {
      url: "#",
      title: "Noticia 1",
      image: "https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg",
    },
    {
      url: "#",
      title: "Noticia 2",
      image: "https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg",
    },
    {
      url: "#",
      title: "Noticia 3",
      image: "",
    }
  ];

  constructor(private http:HttpClient) { }

  getNewsCallback(callback){
    setTimeout(() => {
      callback(
       this.news
      );
    }, 2000);
  }

  

  getNews(search = ''):Promise<any>{
    return this.http.get(environment.apiUrl + 'noticias?q='+search).toPromise();
  }

  getHeadlines(country = ''):Promise<any>{
    return this.http.get(environment.apiUrl + 'titulares?q='+country).toPromise();
  }

  getSources():Promise<any>{
    return this.http.get(environment.apiUrl + 'fuentes').toPromise();
  }
}

