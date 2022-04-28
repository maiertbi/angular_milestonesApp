import { Task } from "./task";

export let TASKS: Task[] = [
    { id: 1, isDone: false, name: 'Task #1', deadline: new Date("2022-04-11")},
    { id: 2, isDone: false, name: 'Task #2', deadline: new Date("2022-05-11")},
    { id: 3, isDone: false, name: 'Task #3', deadline: new Date("2022-06-11")},
    { id: 4, isDone: true, name: 'Task #4', deadline: new Date("2022-07-11")},
    { id: 5, isDone: true, name: 'Task #5', deadline: new Date("2022-07-11")}
];