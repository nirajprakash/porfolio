import { Component } from '@angular/core';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';
//import 'style-loader!./app.component.scss';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 title = 'Niraj Prakash';
  constructor(
    private dialogService: MdlDialogService,
    private datePicker: MdlDatePickerService) { }

}
