import {AfterContentInit, ChangeDetectorRef, ContentChildren, Directive, ElementRef, Input, OnChanges, OnDestroy, QueryList, Renderer, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

@Directive({
    selector: '[inpageLinkActive]',
    exportAs: 'inpageLinkActive'
})
export class InpageLinkActive implements OnChanges, OnDestroy, AfterContentInit{
    
    ngAfterContentInit(): void {
        throw new Error("Method not implemented.");
    }
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
    ngOnChanges(changes: SimpleChanges): void {
        throw new Error("Method not implemented.");
    }

}