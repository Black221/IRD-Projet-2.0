import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StaffComponent} from "./components/staff/staff.component";
import {SpecificStaffComponent} from "./components/specific-staff/specific-staff.component";
import {StaffActivityUlComponent} from "./components/staff-activity-ul/staff-activity-ul.component";
import {StaffFormComponent} from "./components/staff-form/staff-form.component";

const routes: Routes = [
    { path: '', component: StaffComponent },
    { path: 'view/:id', component: SpecificStaffComponent },
    { path: 'activity/:id', component: StaffActivityUlComponent },
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
