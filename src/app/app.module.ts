import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InMemoryCache} from '@apollo/client/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1pageComponent } from './test1page/test1page.component';
import { Test2pageComponent } from './test2page/test2page.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MultipageComponent} from "./multipage/multipage.component";
import {APOLLO_OPTIONS, ApolloModule} from "apollo-angular";
import {HttpLink} from "apollo-angular/http";

@NgModule({
  declarations: [
    AppComponent,
    Test1pageComponent,
    Test2pageComponent,
    MultipageComponent
  ],
  imports: [
    ApolloModule,

    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [
    HttpClient,

    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: `https://tor-sites-backend.herokuapp.com/graphql`,
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
