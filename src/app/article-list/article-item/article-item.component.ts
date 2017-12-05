import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../article';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() article: Article;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.authService.user.firstName);
  }

}
