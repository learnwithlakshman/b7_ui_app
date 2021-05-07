import { Router } from '@angular/router';
import { AuthService } from './../shared/service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string="";
  constructor(private authService:AuthService,private router:Router) {
        this.username = authService.getUsername() as string;

       authService.usernameSubject.subscribe(res=>{
            this.username = res;
        })
   }

  ngOnInit(): void {
  }
  logout(){
      this.authService.logout();
      this.router.navigate(['/login']);
  }

}
