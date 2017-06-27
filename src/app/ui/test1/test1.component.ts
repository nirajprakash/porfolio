import { Component, OnInit, AfterContentInit, ElementRef, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

import { ServiceWindow } from './../../services';

@Component({
    selector: 'test1-view',
    templateUrl: './test1.component.html',
    styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit, AfterContentInit {

    returnUrl: string;

    nativeWindow: any;

    _mColorPrimary: string = "#5F2689";
    _mColorPrimaryLight: string = "#7e51a0";


    _mFabAnim:any;
    _mFab:any;

    _idBtnOpen:number = 104;

    _mIsFabOpen:boolean = false;

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
            var fabsAmin: any[] = this.el.nativeElement.getElementsByClassName('contact-fab-anim');
            console.log(fabsAmin);
            if (fabsAmin && fabsAmin.length > 0) {
                this._mFabAnim = fabsAmin[0];
            }
            var fabs: any[] = this.el.nativeElement.getElementsByClassName('contact-fab');
            console.log(fabs);
            if (fabs && fabs.length > 0) {
                this._mFab = fabs[0];
            }
        });

    }

    onClickBtn(viewId: number) {
        console.log(viewId);
        if (Number(viewId)) {
            switch (viewId) {

                case this._idBtnOpen:
                    this.toggleFab();
                default:
                    // code...
                    break;
            }
        }
    }

    toggleFab(){
      if(this._mIsFabOpen){
          this._mIsFabOpen = false;
          this.renderer.removeClass(this._mFabAnim, "contact-fab-anim-open");
          this.renderer.removeClass(this._mFab, "contact-fab-hide");
      }  else{
          this._mIsFabOpen = true;
          this.renderer.addClass(this._mFabAnim, "contact-fab-anim-open");
          this.renderer.addClass(this._mFab, "contact-fab-hide");
      }

      this.cdr.detectChanges();

      


    }

    onClickOpenlink(link: string) {
        this.nativeWindow.open(link);
        //this.Service.assignActivity(type).subscribe(res => {
        //newWindow.location = '/#/link/' + res;
        //console.log(res);
    }
}