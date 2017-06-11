import {
    Component,
    AfterContentInit,
    ChangeDetectorRef,
    ElementRef,
    Renderer2
} from '@angular/core';
import { MdlDialogService } from '@angular-mdl/core';
import { MdlDatePickerService } from '@angular-mdl/datepicker/datepicker.service';
import * as moment from 'moment';

@Component({
    selector: 'top-wall-view',
    templateUrl: './top-wall.component.html',
    styleUrls: ['./top-wall.component.scss']
})
export class TopWallComponent implements AfterContentInit {

    constructor(
        private renderer: Renderer2,
        private cdr: ChangeDetectorRef,
        private el: ElementRef) {

    }

    ngAfterContentInit(): void {
        setTimeout(() => {
            var topWall: any[] = this.el.nativeElement.getElementsByClassName('top-wall');
            //console.log(topWall);
            if (topWall && topWall.length > 0) {
                this.renderer.addClass(topWall[0], 'init-top-wall');
                this.cdr.detectChanges();
            }
        });

    }
}