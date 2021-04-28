import { Contact } from './../model/contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Templates and Directives";
  heading = "Courses Offered";
  courses = ["HTML","CSS","AJAX","JSON","Angular"];
  imgUrl = '../../assets/databinding_1.png';
  users = [ 
            {"name":"Krish","email":"krish@gmail.com","isworking":true},
            {"name":"Manoj","email":"manoj@gmail.com","isworking":false},
            {"name":"Sai","email":"sai@gmail.com","isworking":true}
  ]
  colSpan = 3;
  isActive:boolean = true;

  message = "Welcome to Angular world";

  todos:any[] = [];
  todo:string = "";

  userprofile = {
          name:"Krish",
          email:"krish@gmail.com",
          salary:5600,
          dob:new Date(1984,7,6),
          about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quia culpa commodi ab, deleniti similique aliquam ullam totam rerum qui excepturi necessitatibus ipsam, nemo et nostrum perferendis minima labore! Voluptates.'
  }

  contacts:Contact[] = [
    {
      name:"Krish",
      email:"krish@gmail.com",
      mobile:'87654345673',
      dob:new Date(1984,7,6)
    },
    {
      name:"Manoj",
      email:"manoj@gmail.com",
      mobile:'87654345673',
      dob:new Date(1989,2,2)
    },
    
    {
      name:"Ramesh",
      email:"ramesh@gmail.com",
      mobile:'87654345675',
      dob:new Date(1982,7,6)
    },
    
    {
      name:"John",
      email:"john@gmail.com",
      mobile:'87654345673',
      dob:new Date(1981,0,1)
    }
    

  ]

  constructor() { }

  ngOnInit(): void {
    
  }
  changeStatus(){
      this.isActive = !this.isActive;
  }
  addTodo(){
      if(this.todo !=""){
        this.todos.push(this.todo);
        this.todo = "";
      }
  }
  removeItem(index:number){
      this.todos.splice(index,1);
  }

  deleteContact(name:string){
      this.contacts = this.contacts.filter(c=>c.name !== name);
  }

}
