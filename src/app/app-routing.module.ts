import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Test1pageComponent} from "./test1page/test1page.component";
import {Test2pageComponent} from "./test2page/test2page.component";

const routes: Routes = [
  {
    path: ":lang/test-1",
    component: Test1pageComponent
  },
  {
    path: ":lang/test-2",
    component: Test2pageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
