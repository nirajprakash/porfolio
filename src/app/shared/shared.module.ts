import { NgModule }           from '@angular/core';

import { CommonModule }  from '@angular/common';


import {ClipboardDirective, InpageLinkActive, NpWaterfall}  from './directive';

@NgModule({
  imports:      [ CommonModule],
  declarations: [ ClipboardDirective, InpageLinkActive, NpWaterfall],
  exports: [ClipboardDirective, InpageLinkActive, NpWaterfall]
})
export class SharedModule { }