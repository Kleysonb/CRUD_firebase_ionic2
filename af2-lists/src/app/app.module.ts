import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Importando AngularFireModule
import { AngularFireModule } from 'angularfire2';

// AF2 Configurações do AngularFire
export const firebaseConfig = {
  apiKey: "AIzaSyDnAX0CQbbsMYuOTJ66ox_F0GwzPM4XPXY",
  authDomain: "angularfire2-list-example.firebaseapp.com",
  databaseURL: "https://angularfire2-list-example.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "609067141823"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
