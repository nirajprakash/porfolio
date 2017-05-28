
import {BrowserModule} from '@angular/platform-browser';

import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MdlModule } from '@angular-mdl/core';
import { MdlSelectModule } from '@angular-mdl/select';
import { MdlDatePickerModule } from '@angular-mdl/datepicker';

import {Ng2PageScrollModule} from 'ng2-page-scroll';


import { SampleModule } from './ui/sample/sample.module';
import {ServicePortfolioApi, ServiceWindow, ServiceClipboard} from './services';
const routes:  Routes = [
  { path: '', redirectTo: '/onepage', pathMatch: 'full'},
  { path: 'onepage', loadChildren: './ui/onepage/onepage.module#OnepageModule' },
  { path: 'footer', loadChildren: './ui/footer/footer.module#FooterModule' },
  { path: 'sample', loadChildren: './ui/sample/sample.module#SampleModule' },
  { path: 'profile', loadChildren: './ui/profile/profile.module#ProfileModule' },
  { path: 'home', loadChildren: './ui/home/home.module#HomeModule' },
  { path: 'portfolio', loadChildren: './ui/portfolio/portfolio.module#PortfolioModule' },
  { path: 'about', loadChildren: './ui/about/about.module#AboutModule' },
  { path: 'contact', loadChildren: './ui/contact/contact.module#ContactModule' }
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
    rootRouting,
    Ng2PageScrollModule.forRoot()
        
  ],
  providers: [ServicePortfolioApi,ServiceWindow,ServiceClipboard],
  bootstrap: [AppComponent]
})
export class AppModule { }
