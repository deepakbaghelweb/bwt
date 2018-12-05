import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {LinksComponent} from './links/links.component';
import {LinkoneComponent} from './linkone/linkone.component';
import {LinktwoComponent} from './linktwo/linktwo.component';
import {LinkthreeComponent} from './linkthree/linkthree.component';
import {LinkfourComponent} from './linkfour/linkfour.component';
import {LinkfiveComponent} from './linkfive/linkfive.component';
import {LinksixComponent} from './linksix/linksix.component';
import {LinksevenComponent} from './linkseven/linkseven.component';
import {LinkeightComponent} from './linkeight/linkeight.component';
import {LinknineComponent} from './linknine/linknine.component';
import {LinktenComponent} from './linkten/linkten.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'details', component: DetailComponent},
  {path: 'links', component: LinksComponent},
  {path: 'linkone', component: LinkoneComponent},
  {path: 'linktwo', component: LinktwoComponent},
  {path: 'linkthree', component: LinkthreeComponent},
  {path: 'linkfour', component: LinkfourComponent},
  {path: 'linkfive', component: LinkfiveComponent},
  {path: 'linksix', component: LinksixComponent},
  {path: 'linkseven', component: LinksevenComponent},
  {path: 'linkeight', component: LinkeightComponent},
  {path: 'linknine', component: LinknineComponent},
  {path: 'linkten', component: LinktenComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
