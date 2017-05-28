import { NgModule }           from '@angular/core';

import { CommonModule }  from '@angular/common';


import {ClipboardDirective}  from './directive';

@NgModule({
  imports:      [ CommonModule],
  declarations: [ ClipboardDirective ],
  exports: [ClipboardDirective]
})
export class SharedModule { }