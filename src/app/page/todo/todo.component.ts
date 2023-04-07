import { Todo } from './model/todo.model';
import { TodoService } from './service/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoListCompleted: Todo[] = [];
  todoListPending: Todo[] = [];
  constructor(private todoService: TodoService) {
  }
  
  ngOnInit(): void {
    this.todoService.getTodo().subscribe((data) => {
      const allData: Todo[] = data as Todo[];
      this.todoListCompleted = allData.filter((row) => {
        return row.completed == true;
      })
      this.todoListPending = allData.filter((row) => {
        return row.completed == false;
      })

    })
  }
}
