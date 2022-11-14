import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { TaskListComponent } from './task/task-list/task-list.component';


//rotas entre paginas
const routes: Routes = [
  { path:'', component:TaskListComponent },
  { path:'new', component:TaskFormComponent },
  { path:'edit/:id', component:TaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
