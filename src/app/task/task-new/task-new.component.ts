import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { TASKS } from '../task-list';
import { Location } from '@angular/common';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';
import { enUS } from 'date-fns/locale';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  newID: number = TASKS[TASKS.length - 1].id + 1;

  @Input() taskName?: string;
  taskDeadline: Date;


  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) { this.taskDeadline = new Date(); }

  ngOnInit(): void {
  }

  createNewTask(taskName: string,): void {
    let newTask = { id: this.newID, isDone: false, name: taskName, deadline: this.taskDeadline };

    TASKS.push(newTask);
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }

  // https://www.npmjs.com/package/ng2-datepicker
  options: DatepickerOptions = {
    minYear: getYear(new Date()) - 1,
    maxYear: getYear(new Date()) + 5,
    placeholder: '',
    format: 'do MMMM yyyy',
    formatTitle: 'LLLL yyyy',
    formatDays: 'EEEEE',
    firstCalendarDay: 1,
    locale: enUS,
    position: 'bottom',
    inputClass: '', // custom input CSS class to be applied
    calendarClass: 'datepicker-default', // custom datepicker calendar CSS class to be applied
    scrollBarColor: '#dfe3e9' // in case you customize you theme, here you define scroll bar color
  };
}
