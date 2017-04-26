import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SampleComponent } from './sample.component';


import {MdlModule} from "@angular-mdl/core";

import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';
// import {SharedModule} from '../../shared'

const routes: ModuleWithProviders = RouterModule.forChild([
//   { path: '', redirectTo: 'sample', pathMatch: 'full'},
  {
    path: '', component: SampleComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdlModule,
    MdlSelectModule,
    MdlDatePickerModule,
    routes
  ],
  declarations: [
    SampleComponent
  ]
})
export class SampleModule {}