import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathologyComponent } from './components/pathology/pathology.component';
import { PathologyItemComponent } from './components/pathology-item/pathology-item.component';
import { PathologyFormComponent } from './components/pathology-form/pathology-form.component';
import { PathologyEcgListComponent } from './components/pathology-ecg-list/pathology-ecg-list.component';
import { SpecificPathologyComponent } from './components/specific-pathology/specific-pathology.component';
import {PatientRoutingModule} from "../patient/patient-routing.module";
import {CoreModule} from "../core/core.module";



@NgModule({
  declarations: [
    PathologyComponent,
    PathologyItemComponent,
    PathologyFormComponent,
    PathologyEcgListComponent,
    SpecificPathologyComponent
  ],
    imports: [
        CommonModule,
        PatientRoutingModule,
        CoreModule
    ]
})
export class PathologyModule { }
