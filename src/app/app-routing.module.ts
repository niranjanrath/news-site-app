import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewsListComponent} from './components/news-list/news-list.component';
import {NewsItemDetailsComponent} from './components/news-item-details/news-item-details.component';

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'news', component: NewsListComponent},
  {path: 'news/:id', component: NewsItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
