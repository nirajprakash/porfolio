import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent} from './contact.component';


import {MdlModule} from "@angular-mdl/core";

import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';
 import { NguiMapModule} from '@ngui/map';

// import {SharedModule} from '../../shared'

const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: ContactComponent
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
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAIK-MMxtpi_mc0imfl4pcO5vO3U8UBD9U'})
    //routes
    
  ],
  declarations: [
      ContactComponent
  ],
  exports: [ContactComponent]
})
export class ContactModule {}