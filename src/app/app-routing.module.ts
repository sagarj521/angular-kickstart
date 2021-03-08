import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from './ui/ui.module';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    // canActivate: [AuthGuardService],
    component: LayoutComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UiModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
