import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // Accept input from todo component
  @Input()
  todo: Todo = new Todo;

  @Input()
  i!: number;

  // Emitter to tell todo component to delete this specific todo
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { 
    // this.todo = Todo;
  }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    // Emit the msg to delete todo
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }

  onCheckBoxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
  }
}
