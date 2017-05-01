
import {BrowserModule} from '@angular/platform-browser';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MdlModule } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';


import { SampleModule } from './ui/sample/sample.module';

import { ProfileModule } from './ui/profile/profile.module';

const routes:  Routes = [
  { path: '', redirectTo: '/sample', pathMatch: 'full'},
  { path: 'sample', loadChildren: './ui/sample/sample.module#SampleModule' },
  { path: 'profile', loadChildren: './ui/profile/profile.module#ProfileModule' },
  { path: 'home', loadChildren: './ui/home/home.module#HomeModule' },
  { path: 'portfolio', loadChildren: './ui/portfolio/portfolio.module#PortfolioModule' }
//{ path: 'sample', loadChildren: ()=> SampleModule }
];
const rootRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, enableTracing: true });
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    MdlSelectModule,
    MdlDatePickerModule,
    SampleModule,
    ProfileModule,
    
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
