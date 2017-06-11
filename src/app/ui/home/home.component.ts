import { Component,
    AfterContentInit,
    ElementRef,
    Renderer2 } from '@angular/core';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

@Component({
    selector: 'home-view',
    templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterContentInit{
   
    constructor(
        private renderer: Renderer2,
        private el: ElementRef) {

         }

    ngAfterContentInit(): void {
        //this.renderer.addClass(this.el.nativeElement.getElementByClassName, 'init-top-wall');
    }
}