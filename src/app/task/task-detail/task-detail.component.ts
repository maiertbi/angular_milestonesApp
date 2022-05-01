import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from '../task';
import { Location } from '@angular/common';
import { DatepickerOptions } from 'ng2-datepicker';
import { getYear } from 'date-fns';
import { enUS } from 'date-fns/locale';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task?: Task;
  test = new Date;

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
