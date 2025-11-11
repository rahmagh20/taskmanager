import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { Title } from '@angular/platform-browser';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, CommonModule, CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { TaskService } from './task-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Task,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CommonModule,CurrencyPipe,DecimalPipe,PercentPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todolist');
  today = new Date();
  tasks: any[] = [];
  constructor(private taskService: TaskService) {}
 ngOnInit() {
this.tasks = this.taskService.getTasks();
 }

  price = 1234.56;
percentage = 0.259;
  


addNewTask(){
  this.taskService.addTask('new task')
}
removetask(ind:number){
  this.taskService.deleteTask(ind)
}



}



