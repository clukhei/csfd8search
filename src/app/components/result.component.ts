import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http'
import { NgNavigatorShareService } from 'ng-navigator-share';
import { Search } from './models';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  canShare = false
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private webShare: NgNavigatorShareService ) { }
  searchedGenre: String = ''
  searchedQ: string = ''
  jikanResponse: Object = {}
  results: any[] = []
  noResults: String

  ngOnInit(): void {
    this.canShare = this.webShare.canShare()
    console.log(this.canShare)
    this.searchedGenre = this.activatedRoute.snapshot.params.genre
    this.searchedQ = this.activatedRoute.snapshot.params.q
    const url = `https://api.jikan.moe/v3/search/${this.searchedGenre}`
    let params = new HttpParams()
    params = params.set('q', this.searchedQ)
    this.http.get<any>(url, {params: params})
      .toPromise()
      .then(res => {
        this.results = res.results
       
       
      })
      .catch(e => console.log(e))

      
  }
  backToForm() {
    this.router.navigate(['/searchform'])
  }

  shareThis(idx: number) {
    const r = this.results[idx]
    this.webShare.share({
     title: r.title,
     text: r.synopsis,
     url: r.image
     
    })
    .catch(e=> console.error('WebShare', e))
  }

}
