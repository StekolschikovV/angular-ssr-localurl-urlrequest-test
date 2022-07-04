import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1pageComponent } from './test1page/test1page.component';
import { Test2pageComponent } from './test2page/test2page.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1pageComponent,
    Test2pageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
