import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonComponent} from './person/person.component';
const routes: Routes = [
  { path:'', component: PersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
