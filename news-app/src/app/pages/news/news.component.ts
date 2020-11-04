import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import {NewsService} from './../../globals/services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges {

  name:String = "News Component"

  news:any[] = [];//propiedad que ya se tenia

  search:string = "";

  //newsService:NewsService;//servicio a utilizar

  constructor(private newsService:NewsService) { 
   this.newsService = newsService;
  }
  

  ngOnInit(): void {
    /* setTimeout(()=>{
      this.news.push({
        url:'#',
        title:'Nueva noticia'
      })
    },3000); */
    this.newsService.getNews(this.search).then(data =>{
      this.news = data;
    }).catch(err =>{
      console.error(err);
    });
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  doSearch(){
    this.newsService.getNews(this.search).then(data =>{
      this.news = data;
    }).catch(err =>{
      console.error(err);
    });
  }

  /* validateEnter(e){
    if(e.key ==="Enter"){
      this.doSearch();
    }
  } */

}
