import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/* ADICIONAR ISSO AO NOVO PROJETO */
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireModule } from 'angularfire2'
import { SalvarPage } from '../pages/salvar/salvar';
import { AngularFireDatabaseModule } from 'angularfire2/database'
/* ADICIONAR ISSO AO NOVO PROJETO */

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SalvarPage //ADICIONAR ISSO AO NOVO PROJETO
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({ //ADICIONAR ISSO AO NOVO PROJETO
    apiKey: "AIzaSyBeZTmrXdK1GrOmnYbmk7vX8zymr-Iix7M",
    authDomain: "meu-projeto-incrivel-c359d.firebaseapp.com",
    databaseURL: "https://meu-projeto-incrivel-c359d.firebaseio.com",
    projectId: "meu-projeto-incrivel-c359d",
    storageBucket: "meu-projeto-incrivel-c359d.appspot.com",
    messagingSenderId: "183478652610"
  }),
  AngularFireDatabaseModule //ADICIONAR ISSO AO NOVO PROJETO
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SalvarPage //ADICIONAR ISSO AO NOVO PROJETO
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider, //ADICIONAR ISSO AO NOVO PROJETO
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
