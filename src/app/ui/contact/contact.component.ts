import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MdlDialogService, MdlSnackbarService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';
import { ServiceWindow, ServicePortfolioApi, ModelRequestProject } from './../../services';

import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

@Component({
  selector: 'contact-view',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @ViewChild('contactContainer')
  public contactContainer: ElementRef;

  _mRequestProject: ModelRequestProject;
  public _mMapOptions = {
    draggable: true,
    gestureHandling: false,
    styles: [{
      "featureType": "all",
      "elementType": "all",
      "stylers": [
        { "hue": "#1f9498" },
        { "visibility": "simplified" },
        { "lightness": "16" }
      ]
    }, {
      "featureType": "all",
      "elementType": "labels",
      "stylers": [{ "hue": "#e33c5e" }]
    }]
  };

  idBtnGPS: number = 101;
  idBtnMobile: number = 102;
  idBtnEmail: number = 103;

  public _mContactMobile: string = "+918348522963";
  public _mContactEmail: string = "nirajprakash13@gmail.com";
  public _mCopyToClipboard: string = "copy to clipboard";
  public _mLocateOnMap: string = "locate on map";

  projectTypes: string[] = ['wireframe', 'design', 'development'];
  projectBudgets: string[] = ['below 1000', '1000- 2000', '2000-5000', 'above 5000'];


  public number1: number = null;
  public text4: number = null;
  constructor(
    private dialogService: MdlDialogService,
    private datePicker: MdlDatePickerService,
    private pageScrollService: PageScrollService,
    private mdlSnackbarService:MdlSnackbarService,
    @Inject(DOCUMENT) private document: any) { }

  onsubmit() {

  }

  onClickBtn(id: number) {
    console.log("clickBtn: ", id);
    if (Number(id)) {
      switch (id) {
        case this.idBtnGPS:
          // code...
          console.log("click locateGPS", this.document);
          let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#map-section');
          this.pageScrollService.start(pageScrollInstance);
          break;

        default:
          // code...
          break;
      }
    }
  }

  onCopied(value:string){
    this.mdlSnackbarService.showToast(value+"   copied", 4000);
  }
}