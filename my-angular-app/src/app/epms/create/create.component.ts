import { EpmsService } from './../service/epms.service';
import { Employee } from './../model/emp.model';
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
  message = ""
  constructor(private fb:FormBuilder,private epmsService:EpmsService) { }

  ngOnInit(): void {
  }
  submitForm(){
        let emp:Employee = this.empProfile.value;
        this.epmsService.addEmployee(emp).subscribe(res=>{
            emp = res;
            this.message = "Employee is added with id :"+emp.id;
            this.empProfile.reset();
            setTimeout(()=>{
              this.message = "";
            },3000)
        })
      
  }
}
