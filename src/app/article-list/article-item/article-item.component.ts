import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../article';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleService } from '../../article.service';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() article: Article;
   category: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .switchMap(async (params: ParamMap) => {
      this.category = +params.get('category');
      return Observable.of({});
    })
    .subscribe();
  }

  async deleteArticle() {
    try {
      await this.articleService.deleteArticle(this.article.id);
      this.article = new Article;
    } catch (err) {
      console.log(err);
    }
  }

}
