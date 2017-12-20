import {Component, ViewEncapsulation, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-ngmodal',
  templateUrl: './ngmodal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .dark-modal .btn-basic{
      cursor: pointer;
    }
    .dark-modal .btn-basic:hover{
      color: #fff;
      background-color:#59b5fa;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
    .btn-basic{
      cursor: pointer;
    }
    .btn-basic:hover{
      color: #fff;
      background-color:#59b5fa;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
  `]
})
export class NgmodalComponent {

  closeResult: string;
  @Input() article: Article;

  constructor(
    private modalService: NgbModal,
    private articleService: ArticleService
  ) {}

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
    console.log(this.article);
  }

  async deleteArticle() {
    try {
      console.log(this.article.id);
      await this.articleService.deleteArticle(this.article.id);
      this.article.id = 0;
    } catch (err) {
      console.log(err);
    }
  }

}
