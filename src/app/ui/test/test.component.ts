import { Component, OnInit, AfterContentInit, ElementRef, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ServiceWindow } from './../../services'

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');
@Component({
    selector: 'test-view',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterContentInit {

    returnUrl: string;

    nativeWindow: any;
    _mSocialLink: any = {
        github: "https://github.com/nirajprakash",
        linkedIn: "https://www.linkedin.com/in/niraj-prakash-3317674b/",
        instagram: "https://www.instagram.com/niraj_prakash/"
    };

    _mColorPrimary: string = "#5F2689";
    _mColorPrimaryLight: string = "#7e51a0";


    idBtnGPS: number = 101;
    idBtnMobile: number = 102;
    idBtnEmail: number = 103;

    
    _mFabAnim:any;
    _mFab:any;
    _mContactMessageReply:any;

    _idBtnFabOpen:number = 104;

    _mIsFabOpen:boolean = false;

    public _mContactMobile: string = "+918348522963";
    public _mContactEmail: string = "nirajprakash13@gmail.com";
    public _mCopyToClipboard: string = "copy to clipboard";
    public _mLocateOnMap: string = "locate on map";

    projectTypes: string[] = ['wireframe', 'design', 'development'];
    projectBudgets: string[] = ['below 1000', '1000- 2000', '2000-5000', 'above 5000'];









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
        private serviceWindow: ServiceWindow,
        private el: ElementRef,
        private cdr: ChangeDetectorRef,
        private renderer: Renderer2) {
        this.nativeWindow = this.serviceWindow.getNativeWindow();
    }

    ngOnInit() {
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

            
            
            var messageReplys: any[] = this.el.nativeElement.getElementsByClassName('contact-message-reply');
            console.log(fabs);
            if (messageReplys && messageReplys.length > 0) {
                this._mContactMessageReply = messageReplys[0];
            }
        });

    }

    onClickBtn(viewId: number) {
        console.log(viewId);
        if (Number(viewId)) {
            switch (viewId) {

                case this._idBtnFabOpen:
                    this.toggleFab();
                default:
                    // code...
                    break;
            }
        }
    }

     public onSubmit() {
    let name = this._mFormGroup.get('name').value;
    let email = this._mFormGroup.get('email').value;
    let message = this._mFormGroup.get('message').value
    let body: string = "";

    body = "name: " + name;
    body += " | " + "email: " + email;

    body += " | " + "message: " + message;

    console.log(body);
    this.toggleFab();
  }

    toggleFab(){
      if(this._mIsFabOpen){
          this._mIsFabOpen = false;
          this.renderer.removeClass(this._mFabAnim, "contact-fab-anim-open");
          this.renderer.removeClass(this._mFab, "contact-fab-hide");
          this.renderer.removeClass(this._mContactMessageReply,"contact-message-reply-show");
      }  else{
          this._mIsFabOpen = true;
          this.renderer.addClass(this._mFabAnim, "contact-fab-anim-open");
          this.renderer.addClass(this._mFab, "contact-fab-hide");
          this.renderer.addClass(this._mContactMessageReply,"contact-message-reply-show");
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