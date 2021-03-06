import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioItemComponent } from './portfolio-item.component';
import { VideoDialogComponent } from './video-dialog.component';

import {MdlModule} from "@angular-mdl/core";

import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';
// import {SharedModule} from '../../shared'

const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: PortfolioComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdlModule,
    MdlSelectModule,
    MdlDatePickerModule,
    //routes
    
  ],
  declarations: [
    PortfolioComponent, 
    PortfolioItemComponent,
    VideoDialogComponent
  ],
  entryComponents:[VideoDialogComponent],
  exports: [PortfolioComponent, PortfolioItemComponent,VideoDialogComponent]
})
export class PortfolioModule {}