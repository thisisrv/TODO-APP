import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[];
  localItem: string | null;
  constructor() { 

    this.localItem = localStorage.getItem("todos");

    //check if localitem is NULL
    if(this.localItem == null){
      // Adding values in array
    this.todos = [
      // {
      //   sno:1,
      //   title: "This is title 1",
      //   desc: "This is description 1",
      //   active: true
      // },
      // {
      //   sno:2,
      //   title: "This is title 2",
      //   desc: "This is description 2",
      //   active: true
      // }
    ]
    }
    
    //if todos present then parse this todos array stored in local storage
    else{
      this.todos = JSON.parse(this.localItem);
    }
    
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    console.log(todo);

    //get index of this todo
    const index = this.todos.indexOf(todo);
    //delete elements from javascript array
    this.todos.splice(index, 1);

    //save in local storage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){
    console.log(todo);
    //add elements into javascript array
    this.todos.push(todo);
    //save in local storage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toogleTodo(todo: Todo){
    
    //get index of this todo
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;

    //save in local storage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
