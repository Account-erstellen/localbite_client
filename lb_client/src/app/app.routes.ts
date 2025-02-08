import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ButtonDemoComponent } from './button-demo/button-demo.component'

export const routes: Routes = [
  { path: 'dashboard', component: ButtonDemoComponent },
];
