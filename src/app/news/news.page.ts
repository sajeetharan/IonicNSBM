import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  constructor(private newsService: NewsService, private _router: Router) { }

  ngOnInit() {
    this.newsService.getNews('everything?q=cricket&from=2019-02-22&sortBy=publishedAt').subscribe(
      data => { this.data = data; console.log(JSON.stringify(this.data)); }
    )
  }
  goToSinglePage(news) {
    this.newsService.currentNews = news;
    this._router.navigate(['/tabs/news-detail']);
  }
}
