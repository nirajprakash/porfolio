import {
    AfterContentInit,
    ChangeDetectorRef,
    ContentChildren,
    Directive,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    QueryList,
    Renderer,
    SimpleChanges,
    Inject,
    Renderer2,
    HostListener
} from '@angular/core';


import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[inpageLinkActive]',
    exportAs: 'inpageLinkActive'
})
export class InpageLinkActive implements OnChanges, OnDestroy, AfterContentInit {


    private classes: string[] = [];
    private link: string;
    private _mLinkedElement;
    private document: Document;
    private scrollListener: Function;


    private _mIsActive: boolean = false;
    private _mIsActivePrev: boolean = false;

    @Input()
    set inpageLinkActive(data: string[] | string) {
        const classes = Array.isArray(data) ? data : data.split(' ');
        this.classes = classes.filter(c => !!c);

    }
    @Input()
    set inpageLink(data: string) {
        const link = Array.isArray(data) ? data[0] : data.split(" ")[0];
        this.link = link;


    }

    constructor(
        private renderer: Renderer2,
        private el: ElementRef,
        private cdr: ChangeDetectorRef,
        @Inject(DOCUMENT) document: any) {
        this.document = <Document>document;
       // console.log('inpage: ');
    }

    ngAfterContentInit(): void {

       // console.log('inpage: ' + this.link);
        if (!this.link) {
            return;
        }
        //this._mLinkedElement = this.el.nativeElement.querySelector(this.link);
        this._mLinkedElement = this.document.getElementById(this.link);
       // console.log(this._mLinkedElement);
        if (!this._mLinkedElement) {
            return;
        }

         this.checkForChanges();
        this.update();
        //console.log(this._mLinkedElement);
        /*this.scrollListener = this.renderer.listen(this._mLinkedElement, 'scroll', (e) => {
            console.log("scroll");
            console.log(this._mLinkedElement.scrollTop);
            this.onScroll(this._mLinkedElement.scrollTop);
            return true;
        });*/
        //this._mLinkedElement = this.el.nativeElement.
        //throw new Error("Method not implemented.");
    }
    ngOnDestroy(): void {
        //throw new Error("Method not implemented.");
    }
    ngOnChanges(changes: SimpleChanges): void {
        //throw new Error("Method not implemented.");
    }


    @HostListener('window:scroll', ['$event'])
    doSomething(event) {
        // console.debug("Scroll Event", document.body.scrollTop);
        // see András Szepesházi's comment below
        this.checkForChanges();
        this.update();


    }

    private checkForChanges() {
        let positionY = window.pageYOffset;
        //console.debug("Scroll Event", positionY);
        if (this._mLinkedElement) {
            let offsetTop = this._mLinkedElement.offsetTop;
            let offsetBottom = this._mLinkedElement.offsetHeight + offsetTop;

            if (offsetTop <= positionY+2 && offsetBottom > positionY+2) {
                this._mIsActive = true;
               // console.log("active");

            } else {
                this._mIsActive = false;
               // console.log("inactive");
            }
        }
    }

    private update(): void {
        if (!this.link) return;

        if (this._mIsActivePrev !== this._mIsActive) {
            this._mIsActivePrev =this._mIsActive;
            if (this._mIsActive) {
                this.classes.forEach(
                    c => this.renderer.addClass(this.el.nativeElement, c));
            } else {
                this.classes.forEach(
                    c => this.renderer.removeClass(this.el.nativeElement, c));
            }
            this.cdr.detectChanges();
        }
    }

}