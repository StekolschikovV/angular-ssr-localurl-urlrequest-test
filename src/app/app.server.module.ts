import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { APP_BASE_HREF } from '@angular/common';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

console.log("APP_BASE_HREF", APP_BASE_HREF)
@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: 'http://jsonplaceholder.typicode.com'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
