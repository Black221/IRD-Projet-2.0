import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcgComponent } from './components/ecg/ecg.component';
import { EcgItemComponent } from './components/ecg-item/ecg-item.component';
import { SpecificEcgComponent } from './components/specific-ecg/specific-ecg.component';
import { EcgFormComponent } from './components/ecg-form/ecg-form.component';
import {EcgRoutingModule} from "./ecg-routing.module";
import {CoreModule} from "../core/core.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    EcgComponent,
    EcgItemComponent,
    SpecificEcgComponent,
    EcgFormComponent
  ],
    imports: [
        CommonModule,
        EcgRoutingModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    ]
})
export class EcgModule { }
