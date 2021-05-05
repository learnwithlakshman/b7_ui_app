import { AuthService } from './../shared/service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username:string="";
  constructor(private authService:AuthService) {
        this.username = authService.getUsername() as string;
   }

  ngOnInit(): void {
  }

}
