import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Article } from '../article';
import { Location } from '@angular/common';
import { ArticleService } from '../article.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  // article: Article = new Article(0, '', Date.now(), '', '', '');
  article: Article = new Article();

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .switchMap(async (params: ParamMap) => {
      const id = +params.get('id');
      this.article = await this.articleService.getArticle(id);
      console.log(this.article);
      return Observable.of({});
    })
    .subscribe();
  }

  async submit(f) {
    if (f.invalid) {
      return;
    }
    if (this.article.id > 0) {
      await this.articleService.editArticle(this.article.id, this.article);
    }/* else {
      await this.articleService.addIssue(art);
    }*/
    this.location.back();
  }

}
