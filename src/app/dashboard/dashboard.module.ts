import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashMainComponent } from './dash-main/dash-main.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';



@NgModule({
  declarations: [DashMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { }
