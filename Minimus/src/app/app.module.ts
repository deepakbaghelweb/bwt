import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ExcelService} from './excel.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { LinksComponent } from './links/links.component';
import { HomeComponent } from './home/home.component';
import { LinkoneComponent } from './linkone/linkone.component';
import { LinktwoComponent } from './linktwo/linktwo.component';
import { LinkthreeComponent } from './linkthree/linkthree.component';
import { LinkfourComponent } from './linkfour/linkfour.component';
import { LinkfiveComponent } from './linkfive/linkfive.component';
import { LinksixComponent } from './linksix/linksix.component';
import { LinksevenComponent } from './linkseven/linkseven.component';
import { LinkeightComponent } from './linkeight/linkeight.component';
import { LinknineComponent } from './linknine/linknine.component';
import { LinktenComponent } from './linkten/linkten.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    LinksComponent,
    HomeComponent,
    LinkoneComponent,
    LinktwoComponent,
    LinkthreeComponent,
    LinkfourComponent,
    LinkfiveComponent,
    LinksixComponent,
    LinksevenComponent,
    LinkeightComponent,
    LinknineComponent,
    LinktenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
