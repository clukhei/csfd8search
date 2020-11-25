import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private router: Router, private activatedRoute:ActivatedRoute, private http: HttpClient) { }
  searchedGenre: String =''
  searchedQ: String =''
  ngOnInit(): void {
 
    this.searchedGenre = this.activatedRoute.snapshot.params.genre
    this.searchedQ = this.activatedRoute.snapshot.params.q
    this.http.get('')
  }
  backToForm(){
    this.router.navigate(['/searchform'])
  }
}
