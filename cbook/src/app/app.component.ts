import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  regForm:FormGroup;
  constructor(private fb:FormBuilder){
      this.regForm = this.fb.group({
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        address:this.fb.group({
            city:['',[Validators.required]]
        })
      })
  }
  submitForm(){
    console.log(this.regForm.value);
    this.regForm.reset();
  }
  get name(){
    return this.regForm.controls['name'];
  }
  get email(){
    return this.regForm.controls['email'];
  }
}
