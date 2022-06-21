import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StaffComponent} from "./components/staff/staff.component";
import {SpecificStaffComponent} from "./components/specific-staff/specific-staff.component";
import {StaffActivityListComponent} from "./components/staff-activity-list/staff-activity-list.component";
import {StaffFormComponent} from "./components/staff-form/staff-form.component";

const routes: Routes = [
    { path: '', component: StaffComponent },
    { path: 'view/:id', component: SpecificStaffComponent },
    { path: 'activity/:id', component: StaffActivityListComponent },
    { path: 'new', component: StaffFormComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class StaffRoutingModule {

}
