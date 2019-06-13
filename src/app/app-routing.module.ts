import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ JsonToDoComponent } from './json-to-do/json-to-do.component';
import{ ToDoListComponent } from './to-do-list/to-do-list.component';
const routes: Routes = [
  {
    path: '',
    component: ToDoListComponent
  },
  {
    path: 'json-to-do',
    component: JsonToDoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
