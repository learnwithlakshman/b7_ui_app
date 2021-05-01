import { FormBuilder } from '@angular/forms';
import { Member } from './../model/memeber.model';
import { MemberService } from './../shared/service/member.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {


  usernames:string[] = ["Krish","Manoj","Charan"];
  viewtype:string = '';
  members:Member[] = [];
  username:string = "";
  status:boolean = true;
  userProfileImage:any;
  imageId:string="";
  imageUrl:string="../../assets/profile.jpg";

  url:any;
  constructor(private memberService:MemberService,private http:HttpClient,private sanitizer: DomSanitizer,private fb:FormBuilder) { }
  
  empProfile = this.fb.group({
        userId:[''],
        name:[''],
        email:[''],
        mobile:[''],
        dept:[''],
        salary:[''],
        gender:['']
  })
  ngOnInit(): void {
    this.members = this.memberService.members;
   
  }
  changeStatus(){
    this.status = !this.status;
  }
  submit(){
    let emp = this.empProfile.value;
    this.http.get('https://lwlepms.herokuapp.com/epms/api/v1/employees').subscribe(res=>{
          console.log(res);
    })
  }

}
