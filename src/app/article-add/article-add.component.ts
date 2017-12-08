import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

  article: Article = new Article;

  constructor(
    private articleService: ArticleService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.article.user = this.authService.user;
  }

  async submit(f) {
    console.log(this.article);
    if (f.invalid) {
      return;
    }
    await this.articleService.addArticle(this.article);
    this.router.navigate(['dashboard']);
  }

}
