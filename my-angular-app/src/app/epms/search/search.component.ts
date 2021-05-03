import { EpmsService } from './../service/epms.service';
import { Employee } from './../model/emp.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  empList:Employee[] = [];
  message:string="";
  searchText:string="";
  constructor(private empService:EpmsService) { }

  ngOnInit(): void {
  }

  search(){
   let value = this.searchText;
   if(this.searchText){
        this.empService.search(value).subscribe(res=>{
            this.empList = res;
        })
   }else{
       this.empList =[];
   }
  }
}
