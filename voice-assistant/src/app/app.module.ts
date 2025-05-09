import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { HttpClient } from '@angular/common/http'; 
import { AppComponent } from './app.component';  // Import AppComponent

@NgModule({
  declarations: [],  // Declare the AppComponent
  imports: [BrowserModule,HttpClientModule],
  providers: [],
  bootstrap: []  // Bootstrap the AppComponent
})
export class AppModule { }
