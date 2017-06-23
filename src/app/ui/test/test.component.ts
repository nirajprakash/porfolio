import { Component, OnInit, AfterContentInit, ElementRef, ChangeDetectorRef, Renderer2 } from '@angular/core';
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
export class TestComponent implements OnInit, AfterContentInit {

    returnUrl: string;

    nativeWindow: any;

    _mColorPrimary: string = "#5F2689";
    _mColorPrimaryLight: string = "#7e51a0";


    public number1: number = null;
    public text4: number = null;

    _mElementTrigger: any;
    _mElementPseudoClass: any;

    _idBtnTrigger: number = 102;
    _idBtnClose: number = 103;

    constructor(
        private dialogService: MdlDialogService,
        private datePicker: MdlDatePickerService,
        private route: ActivatedRoute,
        private router: Router,
        private serviceWindow: ServiceWindow,
        private el: ElementRef,
        private cdr: ChangeDetectorRef,
        private renderer: Renderer2) {
        this.nativeWindow = this.serviceWindow.getNativeWindow();
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        setTimeout(() => {
        });

    }

    ngAfterContentInit(): void {
        setTimeout(() => {
            var triggers: any[] = this.el.nativeElement.getElementsByClassName('trigger');
            console.log(triggers);
            if (triggers && triggers.length > 0) {
                //this.renderer.addClass(triggers[0], 'init-top-wall');
                this._mElementTrigger = triggers[0];
                //this.cdr.detectChanges();
            }

            var pseudoClasses: any[] = this.el.nativeElement.getElementsByClassName('pseudo-circle');
            console.log(pseudoClasses);
            if (pseudoClasses && pseudoClasses.length > 0) {
                this._mElementPseudoClass = pseudoClasses[0];
            }
        });

    }

    onClickBtn(viewId: number) {
        console.log(viewId);
        if (Number(viewId)) {
            switch (viewId) {

                case this._idBtnTrigger:
                    // code...
                    this.openBottom();
                    break;
                case this._idBtnClose:
                    this.closeBottom();

                default:
                    // code...
                    break;
            }
        }
    }

    openBottom() {

        if (this._mElementPseudoClass == null || this._mElementTrigger == null) {

            console.log("null openbotom");
            return;
        }
        this.renderer.addClass(this._mElementPseudoClass, "open");

        this.renderer.addClass(this._mElementTrigger, "open");
        this.cdr.detectChanges();
    }
    closeBottom() {

        if (this._mElementPseudoClass == null || this._mElementTrigger == null) {

            console.log("null closebotom");
            return;
        } 
        this.renderer.removeClass(this._mElementPseudoClass, "open");

        this.renderer.removeClass(this._mElementTrigger, "open");
        this.cdr.detectChanges();
    }

    onClickOpenlink(link: string) {
        this.nativeWindow.open(link);
        //this.Service.assignActivity(type).subscribe(res => {
        //newWindow.location = '/#/link/' + res;
        //console.log(res);
    }
}