import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Zad7Component } from './zad7/zad7.component';
import { InjectMockDataService } from './inject-mock-data.service';
import { Zad7childComponent } from './zad7child/zad7child.component';

@NgModule({
  declarations: [
    AppComponent,
    Zad7Component,
    Zad7childComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InjectMockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
