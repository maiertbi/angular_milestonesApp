import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from './task/task-list';
import { Task } from './task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS.filter(t => t.isDone == false));
    return tasks;
  }

  getTasksDone(): Observable<Task[]> {
    const tasksDone = of(TASKS.filter(t => t.isDone == true));
    return tasksDone;
  }

  // getTask(id: number): Observable<Task> {
  //   const task = TASKS.find(t => t.id === id);
  //   return of(task);
  // } 

}
