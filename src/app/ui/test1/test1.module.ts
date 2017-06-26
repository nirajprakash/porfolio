import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { Test1Component } from './test1.component';

import {MdlModule} from "@angular-mdl/core";

import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';
// import {SharedModule} from '../../shared'

const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: Test1Component
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
    Test1Component
  ],
  exports: [Test1Component]
})
export class Test1Module {}