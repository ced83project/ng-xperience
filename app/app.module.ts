import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CanyonismeComponent } from './pages/canyonisme/canyonisme.component';


@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    CanyonismeComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
