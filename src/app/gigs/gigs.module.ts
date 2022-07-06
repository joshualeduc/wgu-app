import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';

import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  { path: 'vendors', component: VendorsComponent},
  { path: '**', redirectTo: 'vendors', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    VendorsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class GigsModule { }
