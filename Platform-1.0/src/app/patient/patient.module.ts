import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './components/patient/patient.component';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { PatientFormComponent } from './components/patient-form/patient-form.component';
import { SpecificPatientComponent } from './components/specific-patient/specific-patient.component';
import { PatientEcgListComponent } from './components/patient-ecg-list/patient-ecg-list.component';
import {PatientRoutingModule} from "./patient-routing.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PatientComponent,
    PatientItemComponent,
    PatientFormComponent,
    SpecificPatientComponent,
    PatientEcgListComponent
  ],
    imports: [
        CommonModule,
        PatientRoutingModule,
        SharedModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class PatientModule { }
