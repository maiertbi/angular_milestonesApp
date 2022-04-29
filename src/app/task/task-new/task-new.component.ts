import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { TASKS } from '../task-list';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  newID: number = TASKS[TASKS.length - 1].id +1;

  @Input() taskName?: string;

  newTask = { id: this.newID, isDone: false, name: this.taskName, deadline: new Date("2022-07-11")};

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  createNewTask(): void {
    // TASKS.push(this.newTask);
  }

  goBack(): void {
    this.location.back();
  }
}
