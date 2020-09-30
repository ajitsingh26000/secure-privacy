import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerTopComponent } from './components/banner-top/banner-top.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    BannerComponent,
    BannerTopComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
