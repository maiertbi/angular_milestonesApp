import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from './task/task-list';
import { Task } from './task/task';
import { NONE_TYPE } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

  // getTask(id: number): Observable<Task> {
  //   const task = TASKS.find(t => t.id === id);
  //   return of(task);
  // } 

}
