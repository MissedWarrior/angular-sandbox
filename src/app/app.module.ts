import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { IconModule } from '../icons/icon.module';
import { OnInitDirective } from '../directives/on-init.directive';

import { ComponentsModule } from '../components/components.module';

import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomePageComponent,
    ToolbarComponent,
    OnInitDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    IconModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
