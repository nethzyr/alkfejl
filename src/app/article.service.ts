import { Injectable } from '@angular/core';
import { Article } from './article';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
};

@Injectable()
export class ArticleService {

  articles: Article[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('api/article');
  }

  getArticle(id): Promise<Article> {
    return this.http.get<Article>(`api/article/${id}`).toPromise();
  }

  editArticle(id: number, article: Article): Promise<Article> {
    return this.http.put<Article>(
      `api/article/${id}`,
      article,
      httpOptions
    ).toPromise();
  }

  addArticle(article: Article): Promise<Article> {
    return this.http.post<Article>(
      `api/article/new`,
      httpOptions
    ).toPromise();
  }

  deleteArticle(id: number): Promise<Article>  {
    return this.http.delete<Article>(
      `api/article/${id}`,
      httpOptions
    ).toPromise();
  }

}
