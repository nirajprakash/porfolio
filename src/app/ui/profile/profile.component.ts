import { Component } from '@angular/core';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

@Component({
    selector: 'profile-view',
    templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    constructor(
        private dialogService: MdlDialogService,
        private datePicker: MdlDatePickerService) { }
}
