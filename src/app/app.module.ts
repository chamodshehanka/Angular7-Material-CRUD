import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './login/email/email.component';
import { SignupComponent } from './login/signup/signup.component';
import { MembersComponent } from './login/members/members.component';
import { DevelopersComponent } from './developers/developers.component';
import { DeveloperComponent } from './developers/developer/developer.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCD9e6vDbCfh9LeM6Q86lwqUgFJz7XQ4r4',
  authDomain: 'angular7-crud-7cb22.firebaseapp.com',
  databaseURL: 'https://angular7-crud-7cb22.firebaseio.com',
  projectId: 'angular7-crud-7cb22',
  storageBucket: 'angular7-crud-7cb22.appspot.com',
  messagingSenderId: '58507482477'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    DevelopersComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
