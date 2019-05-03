import { MarszallPlynnychComponent } from './components/body/main/content/order/book/marszall-plynnych/marszall-plynnych.component';
import { JamborComponent } from './components/body/main/content/order/album/jambor/jambor.component';
import { GlowniakComponent } from './components/body/main/content/order/album/glowniak/glowniak.component';
import { KocayComponent } from './components/body/main/content/order/album/kocay/kocay.component';
import { KossuthComponent } from './components/body/main/content/order/album/kossuth/kossuth.component';
import { SlykComponent } from './components/body/main/content/order/album/slyk/slyk.component';
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
  { path: 'order-album-harasimowicz', component: HarasimowiczComponent },
  { path: 'order-album-slyk', component: SlykComponent },
  { path: 'order-album-kossuth', component: KossuthComponent },
  { path: 'order-album-kocay', component: KocayComponent },
  { path: 'order-album-glowniak', component: GlowniakComponent },
  { path: 'order-album-jambor', component: JamborComponent },
  { path: 'order-album-marszall-plynnych', component: MarszallPlynnychComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
