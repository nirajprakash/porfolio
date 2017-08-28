import { Component } from '@angular/core';
import { MdlDialogService, MdlSnackbarService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

import { ServiceWindow } from './../../services'
@Component({
    selector: 'footer-view',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    nativeWindow: any;

    _mSocialLink: any = {
        github: "https://github.com/nirajprakash",
        linkedIn: "https://www.linkedin.com/in/niraj-prakash-3317674b/",
        instagram: "https://www.instagram.com/niraj_prakash/",
        behance: "https://www.behance.net/nirajpraka6038"
    };

    _mShareString: string = "Checkout portfolio of Niraj Prakash at http://thedroid.io";

    constructor(
        private mdlSnackbarService: MdlSnackbarService,
        private serviceWindow: ServiceWindow) {
        this.nativeWindow = this.serviceWindow.getNativeWindow();

    }
    onClickOpenlink(link: string) {
        this.nativeWindow.open(link);

    }

    onCopied(value: string) {
        this.mdlSnackbarService.showToast(value + "   copied", 4000);
    }




}