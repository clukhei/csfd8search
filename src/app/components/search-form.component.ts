import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { normalizeQ, SearchDatabase } from './search.database';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private searchDB: SearchDatabase) { }
  searchForm: FormGroup

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      title: this.fb.control('', [Validators.required]),
      genre: this.fb.control('', [Validators.required])
    })
  }
  backToList() {
    this.router.navigate(['/searchlist'])
  }
  toResults() {
    const genre = this.searchForm.get('genre').value
    const q = normalizeQ(this.searchForm.get('title').value)
    this.router.navigate(['/searchform', genre, q])
  }

  saveToDB() {
    this.searchDB.saveSearch(this.searchForm.value)
    this.toResults()

  }
}
