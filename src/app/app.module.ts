import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HeaderComponent } from './ui/header/header.component';
import { PostComponent } from './ui/post/post.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PostManageComponent } from './pages/post-manage/post-manage.component';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailPageComponent,
    HeaderComponent,
    PostComponent,
    PostManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
