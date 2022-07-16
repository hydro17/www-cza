import { DistinctionsComponent } from './components/body/main/content/distinctions/distinctions.component';
import { ElfComponent } from './components/body/main/content/elf/elf.component';
import { ContactInfoComponent } from './components/body/main/content/contact-info/contact-info.component';
import { ArchivalMagazinesComponent } from './components/body/main/content/archival-magazines/archival-magazines.component';
import { RulesForAuthorsComponent } from './components/body/main/content/rules-for-authors/rules-for-authors.component';
// tslint:disable-next-line:max-line-length
import { AnnualTablesOfContentsComponent } from './components/body/main/content/annual-tables-of-contents/annual-tables-of-contents.component';
import { SubscriptionComponent } from './components/body/main/content/subscription/subscription.component';
// tslint:disable-next-line:max-line-length
import { SlownikJakosciZyciaComponent } from './components/body/main/content/order/book/slownik-jakosci-zycia/slownik-jakosci-zycia.component';
import { SkulskiComponent } from './components/body/main/content/order/book/skulski/skulski.component';
import { KosmetykiBezTajemnicComponent } from './components/body/main/content/order/book/kosmetyki-bez-tajemnic/kosmetyki-bez-tajemnic.component';
import { FilozofiaFarmacjiComponent } from './components/body/main/content/order/book/filozofia-farmacji/filozofia-farmacji.component';
import { MarszallProblemyComponent } from './components/body/main/content/order/book/marszall-problemy/marszall-problemy.component';
import { MarszallPolstalychComponent } from './components/body/main/content/order/book/marszall-polstalych/marszall-polstalych.component';
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
import { RodoComponent } from './components/body/main/content/rodo/rodo.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsComponent, data: { name: 'news' } },
  { path: 'info-about-cza', component: InfoAboutCzaComponent, data: { name: 'info-about-cza' } },
  { path: 'table-of-contents', component: TableOfContentsComponent, data: { name: 'table-of-contents' } },
  { path: 'scientific-articles-digest', component: ScientificArticlesDigestComponent, data: { name: 'scientific-articles-digest' } },
  { path: 'order-album-harasimowicz', component: HarasimowiczComponent, data: { name: 'order-album-harasimowicz' } },
  { path: 'order-album-slyk', component: SlykComponent, data: { name: 'order-album-slyk' } },
  { path: 'order-album-kossuth', component: KossuthComponent, data: { name: 'order-album-kossuth' } },
  { path: 'order-album-kocay', component: KocayComponent, data: { name: 'order-album-kocay' } },
  { path: 'order-album-glowniak', component: GlowniakComponent, data: { name: 'order-album-glowniak' } },
  { path: 'order-album-jambor', component: JamborComponent, data: { name: 'order-album-jambor' } },
  { path: 'order-book-marszall-plynnych', component: MarszallPlynnychComponent, data: { name: 'order-book-marszall-plynnych' } },
  { path: 'order-book-marszall-polstalych', component: MarszallPolstalychComponent, data: { name: 'order-book-marszall-polstalych' } },
  { path: 'order-book-marszall-problemy', component: MarszallProblemyComponent, data: { name: 'order-book-marszall-problemy' } },
  { path: 'order-book-skulski', component: SkulskiComponent, data: { name: 'order-book-skulski' } },
  { path: 'order-book-filozofia-farmacji', component: FilozofiaFarmacjiComponent, data: { name: 'order-book-filozofia-farmacji' } },
  { path: 'order-book-kosmetyki-bez-tajemnic', component: KosmetykiBezTajemnicComponent, data: { name: 'order-book-kosmetyki-bez-tajemnic' } },
  { path: 'order-book-slownik-jakosci-zycia', component: SlownikJakosciZyciaComponent, data: { name: 'order-book-slownik-jakosci-zycia' } },
  { path: 'subscription', component: SubscriptionComponent, data: { name: 'subscription' } },
  { path: 'annual-tables-of-contents', component: AnnualTablesOfContentsComponent, data: { name: 'annual-tables-of-contents' } },
  { path: 'rules-for-authors', component: RulesForAuthorsComponent, data: { name: 'rules-for-authors' } },
  { path: 'archival-magazines', component: ArchivalMagazinesComponent, data: { name: 'archival-magazines' } },
  { path: 'contact-info', component: ContactInfoComponent, data: { name: 'contact-info' } },
  { path: 'elf', component: ElfComponent, data: { name: 'elf' } },
  { path: 'rodo', component: RodoComponent, data: { name: 'rodo' } },
  { path: 'distinctions', component: DistinctionsComponent, data: { name: 'distinctions' } },
  { path: '**', component: NewsComponent, data: { name: '**' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
