import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject, Optional } from '@angular/core';
import  axios from 'axios';
import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssr-prerender-test';
  curs: {
    base_ccy: string,
    buy: string,
    ccy: string,
    sale: string
  }[] = [];
  posts: any;
  URL: string;
  // constructor() {
  //   console.log('AppComponent constructor');
  //   axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(res => {
  //     this.curs = res.data;
  //   })
  // }

  constructor(private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string,
    @Inject(PLATFORM_ID) private platformId: Object) {
      this.URL = `${origin ? origin : '/api'}/posts`;
  }

  ngOnInit() {
    // console.log("+origin", origin)
    // console.log("+this.URL", this.URL)
    // const platform = isPlatformBrowser(this.platformId) ?
    // 'in the browser' : 'on the server';
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(resp => {
        console.log("!!!!", resp)
        this.posts = resp;
      });
  }
}
