import { Member } from './../model/memeber.model';
import { MemberService } from './../shared/service/member.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private memberService:MemberService) { }

  ngOnInit(): void {
    this.members = this.memberService.members;
   
  }
  changeStatus(){
    this.status = !this.status;
  }
 
}
