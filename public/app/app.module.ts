import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';

import { HomeComponent }     from './pages/home/home.component';
import { CanyonsComponent }  from './pages/canyons/canyons.component';
import { CanyonService }     from './pages/canyons/canyon.service';
import { CanyonLevelFilter } from './pages/canyons/canyon.pipe';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD0ZzmO_Xu_lrRDc2UE5MoozVc32GF-xho",
      authDomain: "ng-xperience.firebaseapp.com",
      databaseURL: "https://ng-xperience.firebaseio.com",
      storageBucket: "ng-xperience.appspot.com",
      messagingSenderId: "681739644790"
    })
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    CanyonsComponent,
    CanyonLevelFilter
  ],
  providers: [ CanyonService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
