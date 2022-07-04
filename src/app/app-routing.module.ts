import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Test1pageComponent} from "./test1page/test1page.component";
import {Test2pageComponent} from "./test2page/test2page.component";
import { Test3pageComponent } from './test3page/test3page.component';

const routes: Routes = [
  {
    path: ":lang/test-1",
    component: Test1pageComponent
  },
  {
    path: ":lang/test-1",
    component: Test1pageComponent
  },
  {
    path: "ru/test-2",
    component: Test2pageComponent
  },
  {
    path: "en/test-2",
    component: Test2pageComponent
  },
  {
    path: "test-3",
    component: Test3pageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
