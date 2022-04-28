import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import {Task} from '../task';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task?: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(id).subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }
}
