import { User } from './../../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "https://todo-ser-app.herokuapp.com/todo"
  constructor(private http:HttpClient) { }

  login(user:User):Observable<any>{
    let url = `${this.baseUrl}/auth/login`;
    return this.http.post<any>(url,user);
  }
  register(user:User):Observable<any>{
    let url = `${this.baseUrl}/auth/register`;
    return this.http.post<any>(url,user);
  }

  addToken(token:string){
      localStorage.setItem('token',token);
  }
  getToken(token:string){
      return localStorage.getItem('token');
  }
  addTokenAndUsername(token:string,username:string){
    localStorage.setItem('token',token);
    localStorage.setItem('username',username);

  }
  setUsername(username:string){
    localStorage.setItem('username',username);
  }
  getUsername(){
    return localStorage.getItem('username');
  }
  isLoggedIn(){
      return localStorage.getItem('token') && localStorage.getItem('username') ? true:false;
  }
}
