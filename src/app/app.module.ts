import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { CookingsComponent } from './components/cookings/cookings.component';
import { AboutUsComponent } from './components/about-us/about-us.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CookingsComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
