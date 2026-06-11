import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module')
        .then(m => m.DashboardModule)
  },
  {
    path: 'employee-form',
    loadChildren: () =>
      import('./features/employee-form/employee-form.module')
        .then(m => m.EmployeeFormModule)
  },
  {
    path: 'employee-table',
    loadChildren: () =>
      import('./features/employee-table/employee-table.module')
        .then(m => m.EmployeeTableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
