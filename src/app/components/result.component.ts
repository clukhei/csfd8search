import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) { }
  searchedGenre: String = ''
  searchedQ: String = ''
  jikanResponse: Object = {}
  results: any[] = []
  noResults: String

  ngOnInit(): void {

    this.searchedGenre = this.activatedRoute.snapshot.params.genre
    this.searchedQ = this.activatedRoute.snapshot.params.q
    this.jikanResponse = this.http.get(`https://api.jikan.moe/v3/search/${this.searchedGenre}?q=${this.searchedQ}`)
      .toPromise()
      .then(res => {
        this.results = res.results
      })
      .catch(e => console.log(e))

  }
  backToForm() {
    this.router.navigate(['/searchform'])
  }


}
