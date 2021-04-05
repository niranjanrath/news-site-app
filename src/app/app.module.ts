import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { FeatureNewsListComponent } from './components/feature-news-list/feature-news-list.component';
import { ArchiveNewsListComponent } from './components/archive-news-list/archive-news-list.component';
import { NewsItemDetailsComponent } from './components/news-item-details/news-item-details.component';
import { FeatureNewsItemComponent } from './components/feature-news-item/feature-news-item.component';
import { ArchiveNewsItemComponent } from './components/archive-news-item/archive-news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsListComponent,
    FeatureNewsListComponent,
    ArchiveNewsListComponent,
    NewsItemDetailsComponent,
    FeatureNewsItemComponent,
    ArchiveNewsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
