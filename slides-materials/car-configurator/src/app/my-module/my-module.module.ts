import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';

@NgModule({
  imports: [
    CommonModule, // In the "root" module this should be BrowserModule
    MyModuleRoutingModule
  ],
  declarations: [],
  providers: [],
  exports: []
})
export class MyModuleModule { }


