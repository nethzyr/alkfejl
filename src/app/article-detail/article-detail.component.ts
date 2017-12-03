import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: Article = new Article(0, '', Date.now(), 'connection error', '', '');

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.articleService.getArticle(params['id'])
      .subscribe(article => {
        this.article = article;
        console.log(this.article);
      });
    });
  }

}
