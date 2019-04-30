import { TableOfContentsComponent } from './components/body/main/content/table-of-contents/table-of-contents.component';
import { InfoAboutCzaComponent } from './components/body/main/content/info-about-cza/info-about-cza.component';
import { NewsComponent } from './components/body/main/content/news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/table-of-contents', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'info-about-cza', component: InfoAboutCzaComponent },
  { path: 'table-of-contents', component: TableOfContentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
