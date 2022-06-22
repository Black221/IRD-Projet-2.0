import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './components/staff/staff.component';
import { StaffFormComponent } from './components/staff-form/staff-form.component';
import { StaffItemComponent } from './components/staff-item/staff-item.component';
import { SpecificStaffComponent } from './components/specific-staff/specific-staff.component';
import { StaffActivityListComponent } from './components/staff-activity-list/staff-activity-list.component';
import {StaffRoutingModule} from "./staff-routing.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    StaffComponent,
    StaffFormComponent,
    StaffItemComponent,
    SpecificStaffComponent,
    StaffActivityListComponent
  ],
    imports: [
        CommonModule,
        StaffRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class StaffModule { }
