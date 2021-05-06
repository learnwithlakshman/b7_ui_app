import { AuthService } from './../auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidMessage = "Invalid credentials";
  isValid:boolean=true;
  token:string="";
  constructor(private authService:AuthService,private router:Router) {
    if(this.authService.isUserLoggedIn()){
      this.router.navigate(['project']);
    }

  }

  ngOnInit(): void {
  }

  login(f:any){
 
      this.isValid = false;
      let email = f.value.email;
      let pwd = f.value.password;
      console.log(email,pwd);

     if(this.authService.login(email,pwd)){
         this.router.navigate(['project']);
     }

 

    

  }
}
