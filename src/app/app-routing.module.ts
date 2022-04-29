import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskDoneComponent } from './task/task-done/task-done.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
  {path:'todo', component: TaskComponent},
  {path:'done', component: TaskDoneComponent},
  {path:'task/:id', component: TaskDetailComponent},
  {path:'new', component: TaskNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
