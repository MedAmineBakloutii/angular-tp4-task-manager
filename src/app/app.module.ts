import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TasksFormComponent } from './components/task-form/task-form.component'; // Correct the import path
import { TasksListComponent } from './components/tasks-list/tasks-list.component'; // Import Task List component

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksFormComponent, // Add Task Form component
    TasksListComponent, // Add Task List component
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
