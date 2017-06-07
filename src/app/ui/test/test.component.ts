import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

import { ServiceWindow } from './../../services'

@Component({
    selector: 'test-view',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    returnUrl: string;

    nativeWindow: any;

    _mColorPrimary: string = "#5F2689";
    _mColorPrimaryLight: string = "#7e51a0";


    public number1: number = null;
    public text4: number = null;

    constructor(
        private dialogService: MdlDialogService,
        private datePicker: MdlDatePickerService,
        private route: ActivatedRoute,
        private router: Router,
        private serviceWindow: ServiceWindow) {
        this.nativeWindow = this.serviceWindow.getNativeWindow();
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        setTimeout(() => {
        });

    }

    onClickOpenlink(link: string) {
        this.nativeWindow.open(link);
        //this.Service.assignActivity(type).subscribe(res => {
        //newWindow.location = '/#/link/' + res;
        //console.log(res);
    }
}