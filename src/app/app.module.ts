import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
  ],

  entryComponents: [],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    
    AngularFireAuthModule,
    AngularFirestoreModule, 
    AngularFireDatabaseModule, 
    AngularFireStorageModule,

    // -> Ativando modo PWA
  
  ],

  providers: [
    
    AngularFireAuth,
    AngularFireDatabase,
    AngularFireStorage,

    { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
