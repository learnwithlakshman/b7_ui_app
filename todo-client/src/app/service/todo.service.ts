import { Todo } from './../shared/model/todo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../shared/service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = 'http://todo-ser-app.herokuapp.com/todo/api/v1/task';
  constructor(private http:HttpClient,private authService:AuthService) { }

  getTodos():Observable<Todo[]>{
      let token = this.authService.getToken();
      return this.http.get<Todo[]>(this.baseUrl);
  }
  deleteTodo(todo:Todo){
    let token = this.authService.getToken();
    let url = `${this.baseUrl}/${todo.id}`
    return this.http.delete(url);
  }
}
