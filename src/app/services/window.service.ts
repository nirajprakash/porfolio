import { Injectable } from '@angular/core';

@Injectable()
export class ServiceWindow {
    constructor() {}

    getNativeWindow() {
        return window;
    }
}