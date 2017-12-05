import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  selectedStatus = '';
  articles: Article[];
  filteredIssues: Article[];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.getArticles()
    .subscribe(articles => {
      this.articles = articles;
    });
  }

  onFilterChange(status: string) {
    this.selectedStatus = status;
    this.filterIssues();
  }

  filterIssues() {
    this.filteredIssues = this.selectedStatus === ''
      ? this.articles
      : this.articles.filter(
          article => article.title === this.selectedStatus);
  }

}
