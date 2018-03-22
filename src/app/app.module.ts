import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, RoutableComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import './shared/rjxs-extensions';

@NgModule({
  declarations: [
    AppComponent, RoutableComponents
  ],
  imports: [
    FormsModule,BrowserModule, AppRoutingModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
   
})
export class AppModule { }
