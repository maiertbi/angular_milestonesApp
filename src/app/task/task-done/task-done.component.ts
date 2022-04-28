import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {
  tasksDone: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasksDone();
  }

  getTasksDone(): void {
    this.taskService.getTasksDone()
      .subscribe(tasks => this.tasksDone = tasks);
  }

}
