import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReturnLinkComponent} from "./components/return-link/return-link.component";



@NgModule({
  declarations: [
      ReturnLinkComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        ReturnLinkComponent
    ]
})
export class SharedModule { }
