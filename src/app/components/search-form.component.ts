import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }
  searchForm: FormGroup

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      title: this.fb.control('' ,[Validators.required])
    })
  }
  backToList() {
    this.router.navigate(['/searchlist'])
  }
  toResults(){
    this.router.navigate(['/result'])
  }

}
