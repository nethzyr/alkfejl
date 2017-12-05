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

  articles: Article[] = [
    {
      id: 1,
      author: '',
      date: Date.now(),
      title: 'TestTitle1',
      thumbnail: 'https://media.giphy.com/media/1LweXxLwVT0J2/giphy.gif',
      body: 'TestBody1'
    },
    {
      id: 2,
      author: '',
      date: Date.now(),
      title: 'TestTitle2',
      // tslint:disable-next-line:max-line-length
      thumbnail: 'http://ocdn.eu/pulscms-transforms/1/vu4ktkqTURBXy8yYzI2NDk1ZmUzYWRlNTQ5M2E5MWQxYjgzODA1YjhiNy5qcGVnkpUDAAXNBMPNAq2TBc0DFM0BvA',
      body: 'TestBody2'
    },
    {
      id: 3,
      author: '',
      date: Date.now(),
      title: 'TestTitle3',
      thumbnail: 'https://3.bp.blogspot.com/-M-OKuEjvivA/Tc6hCSmMXNI/AAAAAAAAA-o/cTtWdZMOxlM/s1600/53.gif',
      body: 'TestBody3'
    },
    {
      id: 4,
      author: '',
      date: Date.now(),
      title: 'TestTitle4',
      // tslint:disable-next-line:max-line-length
      thumbnail: 'http://ocdn.eu/pulscms-transforms/1/vu4ktkqTURBXy8yYzI2NDk1ZmUzYWRlNTQ5M2E5MWQxYjgzODA1YjhiNy5qcGVnkpUDAAXNBMPNAq2TBc0DFM0BvA',
      body: 'TestBody4'
    },
    {
      id: 5,
      author: '',
      date: Date.now(),
      title: 'TestTitle5',
      thumbnail: 'https://3.bp.blogspot.com/-M-OKuEjvivA/Tc6hCSmMXNI/AAAAAAAAA-o/cTtWdZMOxlM/s1600/53.gif',
      body: 'TestBody5'
    },
  ];

  constructor(
    private http: HttpClient
  ) { }

  /*getArticles(): Article[] {
    return this.articles;
  }*/

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('api/article');
  }

  /*getArticle(id): Article {
    return this.articles[this.articles.findIndex(x => x.id === id)];
  }*/

  getArticle(id): Promise<Article> {
    return this.http.get<Article>(`api/article/${id}`).toPromise();
  }

  /*addArticle(article: Article) {
    this.articles.push(article);
  }*/

  editArticle(id: number, article: Article): Promise<Article> {
    return this.http.put<Article>(
      `api/article/${id}`,
      article,
      httpOptions
    ).toPromise();
  }

}
