import { Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'todo-list',
    component: TodoListComponent,
  }
];
