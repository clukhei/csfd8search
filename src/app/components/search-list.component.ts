import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from './models';
import { SearchDatabase } from './search.database';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  constructor(private router: Router, private searchDB: SearchDatabase) { }
  
  pastSearches: Search[] = []

  ngOnInit(): void {
    this.searchDB.getSearchOptions()
      .then(res => this.pastSearches = res)
  }

  toSearchForm(){
    this.router.navigate(['/searchform'])
  }
}
