import { InfoAboutCzaComponent } from './components/body/main/content/info-about-cza/info-about-cza.component';
import { NewsComponent } from './components/body/main/content/news/news.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/info-about-cza', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'info-about-cza', component: InfoAboutCzaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
