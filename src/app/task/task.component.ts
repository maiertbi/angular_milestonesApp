import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

  daysLeft(task: Task): number {
    const today = (new Date());
    const dead = task.deadline;

    if (dead.getTime() <= today.getTime()) { // has to be done because diff is set Math.abs()
      return 1;
    }
    
    let diffDays = Math.ceil(Math.abs(dead.getTime() - today.getTime()) / (1000 * 3600 * 24)); 
    return diffDays;
  }
}
