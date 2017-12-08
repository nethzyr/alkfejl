import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { AuthGuard } from '../auth.guard';
import { ArticleEditComponent } from '../article-edit/article-edit.component';
import { ArticleAddComponent } from '../article-add/article-add.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  component: MainPageComponent,
  pathMatch: 'full'
},
{
  path: 'dashboard/:category',
  component: MainPageComponent,
  pathMatch: 'full'
},
{
  path: 'article/:id',
  component: ArticleDetailComponent,
  pathMatch: 'full'
},
{
  path: 'article/:id/edit',
  component: ArticleEditComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard],
  data: {roles: ['ADMIN']}
},
{
  path: 'new',
  component: ArticleAddComponent,
  pathMatch: 'full',
  canActivate: [AuthGuard],
  data: {roles: ['ADMIN', 'EDITOR']}
},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
