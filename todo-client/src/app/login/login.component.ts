import { AuthService } from './../shared/service/auth/auth.service';
import { TodoService } from './../service/todo.service';
import { User } from './../shared/model/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLogin = true;
  message = "Switch to Register";
  userForm: FormGroup;
  successMessage: string = "";
  errorMessage: string = "";
  constructor(private fb:FormBuilder,private router:Router,private todoService:TodoService,private authService:AuthService) { 
    this.userForm = this.fb.group({
      username: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  onChange() {
    this.isLogin = !this.isLogin;
    if (!this.isLogin) {
      this.message = "Swich to Login";
    } else {
      this.message = "Switch to Register"
    }
  }

  onSubmit(){
    console.log("Submit");
    let user: User;
    user = this.userForm.value;
    if (this.isLogin) {
      this.authService.login(user).subscribe(
        res => {
          let token:string = res["jwt"] as string;
          this.router.navigate(['/home']);
          this.authService.addTokenAndUsername(token,user.username);
        }, error => {
          this.errorMessage = "Invalid username or password";
          setTimeout(() => {
            this.errorMessage = "";
          }, 3000);
        }
      )
    } else {
      this.authService.register(user).subscribe(
        res => {
          let username = res["username"];
          this.router.navigate(['/home']);
        }, error => {
          this.errorMessage = "User name already exists";
          setTimeout(() => {
            this.errorMessage = "";
          }, 3000);
        })
    }
  }
}
