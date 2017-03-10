import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCPP71HyXlnZJ2wv-6jMKYT7MrqPCariv0",
  authDomain: "cursosteste-760ba.firebaseapp.com",
  databaseURL: "https://cursosteste-760ba.firebaseio.com",
  storageBucket: "cursosteste-760ba.appspot.com",
  messagingSenderId: "271393413541"
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
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
