import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor() {
  }

  logRef(el: ElementRef) {
    console.log(el);
  }
}
