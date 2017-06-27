import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { TestComponent } from './test.component';

import {MdlModule} from "@angular-mdl/core";

import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';


import {SharedModule} from '../../shared'
// import {SharedModule} from '../../shared'

const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: TestComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MdlModule,
    MdlSelectModule,
    MdlDatePickerModule,
    SharedModule,
    routes
  ],
  declarations: [
    TestComponent
  ],
  exports: [TestComponent]
})
export class TestModule {}