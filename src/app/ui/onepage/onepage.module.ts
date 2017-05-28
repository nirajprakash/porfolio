import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { OnepageComponent } from './onepage.component';

import {MdlModule} from "@angular-mdl/core";

import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';
import {AboutModule, HomeModule,PortfolioModule, ContactModule, FooterModule} from './../index';
// import {SharedModule} from '../../shared'

const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: OnepageComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdlModule,
    MdlSelectModule,
    MdlDatePickerModule,
    AboutModule,
    HomeModule,
    PortfolioModule,
    ContactModule,
    FooterModule,
    routes
    
  ],
  declarations: [
    OnepageComponent,
    
  ],
  exports: []
})
export class OnepageModule {}