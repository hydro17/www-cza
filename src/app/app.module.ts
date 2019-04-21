import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/body/menu/menu.component';
import { SidebarComponent } from './components/body/sidebar/sidebar.component';
import { MainComponent } from './components/body/main/main.component';
import { ContactLeftComponent } from './components/header/contact-left/contact-left.component';
import { ContactRightComponent } from './components/header/contact-right/contact-right.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { FrameComponent } from './components/frame/frame.component';
import { SidebarCardComponent } from './components/body/sidebar/sidebar-card/sidebar-card.component';
import { ContactComponent } from './components/header/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    MainComponent,
    ContactLeftComponent,
    ContactRightComponent,
    LogoComponent,
    FrameComponent,
    SidebarCardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
