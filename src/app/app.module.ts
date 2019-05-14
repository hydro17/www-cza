import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/body/menu/menu.component';
import { SidebarComponent } from './components/body/sidebar/sidebar.component';
import { MainComponent } from './components/body/main/main.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { FrameComponent } from './components/frame/frame.component';
import { SidebarCardComponent } from './components/body/sidebar/sidebar-card/sidebar-card.component';
import { ContactComponent } from './components/header/contact/contact.component';
import { NewsComponent } from './components/body/main/content/news/news.component';
import { InfoAboutCzaComponent } from './components/body/main/content/info-about-cza/info-about-cza.component';
import { TableOfContentsComponent } from './components/body/main/content/table-of-contents/table-of-contents.component';
// tslint:disable-next-line:max-line-length
import { ScientificArticlesDigestComponent } from './components/body/main/content/scientific-articles-digest/scientific-articles-digest.component';
import { OrderComponent } from './components/body/main/content/order/order.component';
import { AlbumComponent } from './components/body/main/content/order/album/album.component';
import { HarasimowiczComponent } from './components/body/main/content/order/album/harasimowicz/harasimowicz.component';
import { SlykComponent } from './components/body/main/content/order/album/slyk/slyk.component';
import { KossuthComponent } from './components/body/main/content/order/album/kossuth/kossuth.component';
import { KocayComponent } from './components/body/main/content/order/album/kocay/kocay.component';
import { GlowniakComponent } from './components/body/main/content/order/album/glowniak/glowniak.component';
import { JamborComponent } from './components/body/main/content/order/album/jambor/jambor.component';
import { BookComponent } from './components/body/main/content/order/book/book.component';
import { MarszallPlynnychComponent } from './components/body/main/content/order/book/marszall-plynnych/marszall-plynnych.component';
import { MarszallPolstalychComponent } from './components/body/main/content/order/book/marszall-polstalych/marszall-polstalych.component';
import { MarszallProblemyComponent } from './components/body/main/content/order/book/marszall-problemy/marszall-problemy.component';
import { SkulskiComponent } from './components/body/main/content/order/book/skulski/skulski.component';
// tslint:disable-next-line:max-line-length
import { SlownikJakosciZyciaComponent } from './components/body/main/content/order/book/slownik-jakosci-zycia/slownik-jakosci-zycia.component';
import { SubscriptionComponent } from './components/body/main/content/subscription/subscription.component';
// tslint:disable-next-line:max-line-length
import { AnnualTablesOfContentsComponent } from './components/body/main/content/annual-tables-of-contents/annual-tables-of-contents.component';
import { RulesForAuthorsComponent } from './components/body/main/content/rules-for-authors/rules-for-authors.component';
import { UpperAdvertisementComponent } from './components/header/upper-advertisement/upper-advertisement.component';
import { ArchivalMagazinesComponent } from './components/body/main/content/archival-magazines/archival-magazines.component';
import { ContactInfoComponent } from './components/body/main/content/contact-info/contact-info.component';
import { ElfComponent } from './components/body/main/content/elf/elf.component';
import { DistinctionsComponent } from './components/body/main/content/distinctions/distinctions.component';
import { MenuItemComponent } from './components/body/menu/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    MainComponent,
    LogoComponent,
    FrameComponent,
    SidebarCardComponent,
    ContactComponent,
    NewsComponent,
    InfoAboutCzaComponent,
    TableOfContentsComponent,
    ScientificArticlesDigestComponent,
    OrderComponent,
    AlbumComponent,
    HarasimowiczComponent,
    SlykComponent,
    KossuthComponent,
    KocayComponent,
    GlowniakComponent,
    JamborComponent,
    BookComponent,
    MarszallPlynnychComponent,
    MarszallPolstalychComponent,
    MarszallProblemyComponent,
    SkulskiComponent,
    SlownikJakosciZyciaComponent,
    SubscriptionComponent,
    AnnualTablesOfContentsComponent,
    RulesForAuthorsComponent,
    UpperAdvertisementComponent,
    ArchivalMagazinesComponent,
    ContactInfoComponent,
    ElfComponent,
    DistinctionsComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
