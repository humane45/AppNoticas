import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Article } from '../interfaces/index';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public articles: Article[]= [];

  constructor(private newServices: NewsService) {}

ngOnInit() {
   this.newServices.getTopHeadlines()
  .subscribe(articles => this.articles.push(...articles));
   

}

}