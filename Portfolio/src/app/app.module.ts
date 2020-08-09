import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

//Importing the necessary firebase libraries....
import * as firebase from 'firebase/app';
import 'firebase/auth';

//Setting the configuration variable....
let config={
  apiKey: "AIzaSyCYzJMqHt-vzRwDAhVwClsdVnftJv19ZAI",
  authDomain: "my-portfolio-a4909.firebaseapp.com",
  databaseURL: "https://my-portfolio-a4909.firebaseio.com",
  projectId: "my-portfolio-a4909",
  storageBucket: "my-portfolio-a4909.appspot.com",
  messagingSenderId: "398195071440",
  appId: "1:398195071440:web:552ea767e3ddfebf2c41d5",
  measurementId: "G-XXLVJRCRZZ"
};

//Initializing the firebase SDK in my project...
firebase.initializeApp(config);


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
