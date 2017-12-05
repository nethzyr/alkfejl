import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Article } from '../article';
import { ArticleService } from '../article.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: Article = new Article();
  date: Date;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .switchMap(async (params: ParamMap) => {
      const id = +params.get('id');
      this.article = await this.articleService.getArticle(id);
      this.date = new Date(this.article.date);
      return Observable.of({});
    })
    .subscribe();
  }

}
