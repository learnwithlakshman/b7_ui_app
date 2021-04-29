import { Member } from './../../model/memeber.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  members:Member[] = [];
  constructor() {
      this.members = [
        {"name":"Krish","card":"gold"},
        {"name":"Manoj","card":"silver"},
        {"name":"Charan","card":"diamond"},
        {"name":"Kiran","card":"gold"},
        {"name":"Sujith","card":"diamond"}
    ]
   }


}
