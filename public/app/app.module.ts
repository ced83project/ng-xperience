import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }      from './app.component';
import { HomeComponent }     from './pages/home/home.component';
import { CanyonsComponent }  from './pages/canyons/canyons.component';
import { CanyonService }     from './pages/canyons/canyon.service';
import { CanyonLevelFilter }   from './pages/canyons/canyon.pipe';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule,
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
