import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  empProfile = this.fb.group({
    userId:[''],
    name:[''],
    email:[''],
    mobile:[''],
    dept:[''],
    salary:[''],
    gender:['']
})
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  submitForm(){
      
  }
}
