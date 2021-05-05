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
      //Logic
      this.isValid = false;
      let email = f.value.email;
      let pwd = f.value.password;
      console.log(email,pwd);

    this.authService.login(email,pwd).subscribe(res=>{

        this.token = (res as any)["token"];
        this.authService.storeToken(this.token);
        this.router.navigate(['project']);
    })

    

  }
}
