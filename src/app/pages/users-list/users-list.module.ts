import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

export const routes: Routes = [
  {
      path: '',
      component: UsersListComponent,
  },
  {
      path: '**',
      redirectTo: ''
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    routing,
    MatChipsModule,
    MatIconModule
  ]
})
export class UsersListModule { }



