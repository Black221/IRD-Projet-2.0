import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StaffComponent} from "./components/staff/staff.component";
import {StaffFormComponent} from "./components/staff-form/staff-form.component";
import {SpecificStaffComponent} from "./components/specific-staff/specific-staff.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../core/core.module";
import {StaffRoutingModule} from "./staff-routing.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
        StaffComponent,
        StaffFormComponent,
        SpecificStaffComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        StaffRoutingModule,
        SharedModule
    ]
})
export class StaffModule { }
