import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { LocationService } from 'src/services/location.service';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx'; 
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx'
import { Network } from '@awesome-cordova-plugins/network/ngx';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },DatePipe,Geolocation,LocationService,Diagnostic,StatusBar,Network],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
