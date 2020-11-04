import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/globals/services/news.service';

@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.scss']
})
export class TitularesComponent implements OnInit {

  headlines:any []=[];
  country:string = 'mx';

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.getHeadlines();
  }

  getHeadlines(country?){
    this.newsService.getHeadlines(country).then(data =>{
      this.headlines = data;
    }).catch(err =>{
      console.error(err);
    });
  }

  onCountryChange(){
    this.getHeadlines(this.country);
  }

  onItemClick(item){
    
  }

}
