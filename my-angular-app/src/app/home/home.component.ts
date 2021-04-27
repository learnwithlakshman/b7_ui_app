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
          dob:new Date(1984,7,6)
  }

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

}
