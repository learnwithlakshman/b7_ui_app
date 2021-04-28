import { Contact } from './../model/contact.model';
import { Component, Input, OnInit,EventEmitter, Output, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit, OnDestroy {

  @Input()
  userData?:Contact;
 
  @Output()
  removeEle = new EventEmitter<any>();
 
  constructor() { }
 
  ngOnDestroy(): void {
      console.log("Destory method");
  }

  ngOnInit(): void {
    console.log("Init method");
  }

  removeContact(name:string){
      this.removeEle.emit(name);
  }

}
