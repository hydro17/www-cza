// tslint:disable-next-line:max-line-length
import { HarasimowiczComponent } from './components/body/main/content/order/album/harasimowicz/harasimowicz.component';
// tslint:disable-next-line:max-line-length
import { ScientificArticlesDigestComponent } from './components/body/main/content/scientific-articles-digest/scientific-articles-digest.component';
import { TableOfContentsComponent } from './components/body/main/content/table-of-contents/table-of-contents.component';
import { InfoAboutCzaComponent } from './components/body/main/content/info-about-cza/info-about-cza.component';
import { NewsComponent } from './components/body/main/content/news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'info-about-cza', component: InfoAboutCzaComponent },
  { path: 'table-of-contents', component: TableOfContentsComponent },
  { path: 'scientific-articles-digest', component: ScientificArticlesDigestComponent },
  { path: 'order-album-harasimowicz', component: HarasimowiczComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
