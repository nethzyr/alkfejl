import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleItemComponent } from './article-list/article-item/article-item.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleService } from './article.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './menu/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    ArticleListComponent,
    ArticleItemComponent,
    ArticleDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArticleService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
