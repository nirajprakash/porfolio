import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';

import * as moment from 'moment';

import { ServiceWindow } from './../../services'

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
@Component({
    selector: 'test2-view',
    templateUrl: './test2.component.html',
    styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

    returnUrl: string;

    nativeWindow: any;

    _mColorPrimary: string = "#5F2689";
    _mColorPrimaryLight: string = "#7e51a0";

    public _mFormGroup: FormGroup;

    public name = new FormControl('', Validators.required);
    public email = new FormControl('', [Validators.required, emailValidator]);

    public message = new FormControl('', Validators.required);

    constructor(
        private dialogService: MdlDialogService,
        private datePicker: MdlDatePickerService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private serviceWindow: ServiceWindow) {
        this.nativeWindow = this.serviceWindow.getNativeWindow();
    }

    ngOnInit() {

        //super.ngOnInit();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this._mFormGroup = this.fb.group({
            'name': this.name,
            'email': this.email,
            'message': this.message,
        });

        //console.log(this.email.value);

        this._mFormGroup.valueChanges
            .map((formValues) => {
                console.log(formValues);
                if (formValues.name != null) {
                    formValues.name = formValues.name.toUpperCase();
                }
                return formValues;
            })
            // .filter((formValues) => this.form.valid)
            .subscribe((formValues) => {
                console.log(`Model Driven Form valid: ${this._mFormGroup.valid} value:`, JSON.stringify(formValues));
            });

    }




    public onSubmit() {
        let body: string="";
        body = "name: "+ this._mFormGroup.get('name').value;
        body += + " | "+ "email: "+ this._mFormGroup.get('email').value;

        body += + " | "+ "message: "+ this._mFormGroup.get('message').value;
        console.log(body);
    }

    

    onClickOpenlink(link: string) {
        this.nativeWindow.open(link);
        //this.Service.assignActivity(type).subscribe(res => {
        //newWindow.location = '/#/link/' + res;
        //console.log(res);
    }
}