import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PatientComponent} from "./components/patient/patient.component";
import {PatientFormComponent} from "./components/patient-form/patient-form.component";
import {PatientEcgUlComponent} from "./components/patient-ecg-ul/patient-ecg-ul.component";
import {SpecificPathologyComponent} from "../pathology/components/specific-pathology/specific-pathology.component";
import {SpecificPatientComponent} from "./components/specific-patient/specific-patient.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/core.module";
import {PatientRoutingModule} from "./patient-routing.module";



@NgModule({
    declarations: [
        PatientComponent,
        PatientFormComponent,
        PatientEcgUlComponent,
        SpecificPatientComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PatientRoutingModule,
        CoreModule
    ]
})
export class PatientModule { }
