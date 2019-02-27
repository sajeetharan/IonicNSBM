import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  constructor(private newsService : NewsService) { }

  article : any;

  ngOnInit() {
    this.article = this.newsService.currentNews;
  }

}
