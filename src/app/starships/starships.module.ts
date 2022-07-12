import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipInfoComponent } from './ship-info/ship-info.component';

const routes: Routes = [
  { path: 'list', component: ShipListComponent },
  { path: 'info/:id', component: ShipInfoComponent },
  { path: '**', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  declarations: [ShipListComponent, ShipInfoComponent, ConvertToSpacesPipe],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class StarshipsModule {}
