import { Injectable } from '@angular/core';
import {DocumentNode} from "graphql";
import {GET_CATEGORIES, GET_SITES} from "./graphql.queries";
import {Apollo} from "apollo-angular";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public sites$ = new BehaviorSubject<any[]>([]);

  constructor(
    private readonly apollo: Apollo,
  ) {
    this.testGraphqlRequest()
  }

  testGraphqlRequest() {
    this.apollo
      .query<any>({
        query: GET_CATEGORIES,
        variables: {
          language: 'ru'
        }
      })
      .subscribe(({data, loading}) => {
        this.sites$.next(data.categories.data)
        console.log(data.categories.data)
      })
// attributes title
  }

}
