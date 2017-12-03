import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  component: MainPageComponent
},
{
  path: 'article/:id',
  component: ArticleDetailComponent
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
