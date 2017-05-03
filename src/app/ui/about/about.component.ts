import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

import { ServiceWindow, ServicePortfolioApi, ModelTechnology } from './../../services'

@Component({
    selector: 'about-view',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    returnUrl: string;

    nativeWindow: any;

    constructor(
        private dialogService: MdlDialogService,
        private datePicker: MdlDatePickerService,
        private route: ActivatedRoute,
        private router: Router,
        private servicePortfolioApi: ServicePortfolioApi,
        private serviceWindow: ServiceWindow) {
           this.nativeWindow= this.serviceWindow.getNativeWindow();
        //this.resetItems();
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    resetItems() {
    }

}