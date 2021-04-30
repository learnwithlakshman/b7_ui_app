import { Employee } from './../model/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  qualifications = ["B.Tech","M.Tech","BCA","MCA"];

  userReg:FormGroup = this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    mobile:['',Validators.required],
    address:this.fb.group({
        zipcode:['',Validators.required]
    })
    
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  submitEmpForm(emp:NgForm){
      let employee:Employee = emp.value;



      console.log(employee);
      emp.reset();
  }
  submitForm(){
      console.log(this.userReg.value);
      this.userReg.reset();
  }
  get username(){
    return this.userReg.controls["username"];
  }
}
