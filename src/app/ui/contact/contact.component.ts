import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';
import { ServiceWindow, ServicePortfolioApi, ModelRequestProject } from './../../services';


@Component({
    selector: 'contact-view',
    templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    _mRequestProject:ModelRequestProject;
    projectTypes : string[] = ['wireframe', 'design', 'development'];
	projectBudgets : string[] = ['below 1000', '1000- 2000', '2000-5000', 'above 5000'];
	
    
  public number1: number = null;
  public text4:number = null;
    constructor(
        private dialogService: MdlDialogService,
        private datePicker: MdlDatePickerService) { }

        onsubmit(){
            
        }
}