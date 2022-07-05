import {Component, Inject, OnInit, Optional, PLATFORM_ID} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APP_BASE_HREF} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-multipage',
  templateUrl: './multipage.component.html',
  styleUrls: ['./multipage.component.scss']
})
export class MultipageComponent implements OnInit {
  post = ''

  constructor(
    private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string,
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'] || "0"
    this.http.get('https://jsonplaceholder.typicode.com/users/' + id)
      .subscribe((resp: any) => {
        this.post = resp.email || '';
      });
  }

}
