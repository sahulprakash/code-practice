import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleDivComponent } from './style-div/style-div.component';

const routes: Routes = [
  { path: 'style-div', component: StyleDivComponent },
  { path: '', redirectTo: '/style-div', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
