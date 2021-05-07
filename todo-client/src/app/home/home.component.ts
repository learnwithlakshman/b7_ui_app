import {Todo} from './../shared/model/todo.model';
import {TodoService} from './../service/todo.service';
import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {

    todos : Todo[] = [];
    constructor(private todoService : TodoService) {}

    ngOnInit(): void {
        this.showTodos();

    }

    showTodos() {
        this.todoService.getTodos().subscribe(res => {
            this.todos = res;
            console.log(this.todos);
        })
    }

    onDelete(todo : Todo) {
        console.log(todo);
        this.todoService.deleteTodo(todo).subscribe(res => {
            this.showTodos();
        })
    }

    onUpdate(todo : Todo) {
    }

}
