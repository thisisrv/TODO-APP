import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//To set variables to be used in HTML
export class AppComponent {
  title = 'cwh-todo-list';
  //changes title after delay of 2000 ms
  constructor(){
    // setTimeout(() => {
    //   this.title = "Changed title";
    // }, 2000);
  }
}
