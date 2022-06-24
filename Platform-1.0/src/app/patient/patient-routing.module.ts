import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PatientComponent} from "./components/patient/patient.component";
import {SpecificPatientComponent} from "./components/specific-patient/specific-patient.component";
import {PatientEcgListComponent} from "./components/patient-ecg-list/patient-ecg-list.component";
import {PatientFormComponent} from "./components/patient-form/patient-form.component";

const routes: Routes = [
    { path: '', component: PatientComponent },
    { path: 'view/:id', component: SpecificPatientComponent },
    { path: 'ecgs/:id', component: PatientEcgListComponent },
    { path: 'new', component: PatientFormComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ]
})

export class PatientRoutingModule {

}
