import { Component, Inject, ElementRef, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlLayoutComponent} from '@angular-mdl/core';

import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';



import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';


@Component({
    selector: 'onepage-view',
    templateUrl: './onepage.component.html',
    styleUrls: ['./onepage.component.scss']
})
export class OnepageComponent {

    title = 'Niraj Prakash';

 @ViewChild('mainLayout')
  public mainLayout:MdlLayoutComponent;


    idNavHome: number = 101;
    idNavPortfolio: number = 102;
    idNavAbout: number = 103;
    idNavContanct: number = 104;

    
    constructor(
        private pageScrollService: PageScrollService,
        @Inject(DOCUMENT) private document: any) { }

    onClickNavDrawer(id:number){
        this.onClickNav(id);
        this.mainLayout.closeDrawer();

    }

    onClickNav(id: number) {
        console.log("clickNav: ", id);
        if (Number(id)) {
            switch (id) {
                case this.idNavHome:
                    // code...
                    console.log("click Home", this.document);
                    let pageScrollInstanceHome: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#home');
                    this.pageScrollService.start(pageScrollInstanceHome);
                    break;
                case this.idNavPortfolio:
                    // code...
                    console.log("click Portfolio", this.document);
                    let pageScrollInstancePortfolio: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#portfolio');
                    this.pageScrollService.start(pageScrollInstancePortfolio);
                    break;
                case this.idNavAbout:
                    // code...
                    console.log("click About", this.document);
                    let pageScrollInstanceAbout: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#about');
                    this.pageScrollService.start(pageScrollInstanceAbout);
                    break;
                case this.idNavContanct:
                    // code...
                    console.log("click Contact", this.document);
                    let pageScrollInstanceContact: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#contact');
                    this.pageScrollService.start(pageScrollInstanceContact);
                    break;
                default:
                    // code...
                    break;
            }
        }
    }
}