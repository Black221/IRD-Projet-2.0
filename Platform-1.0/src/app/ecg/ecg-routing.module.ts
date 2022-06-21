import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EcgComponent} from "./components/ecg/ecg.component";
import {SpecificEcgComponent} from "./components/specific-ecg/specific-ecg.component";
import {EcgFormComponent} from "./components/ecg-form/ecg-form.component";


const routes: Routes = [
    { path: '', component: EcgComponent },
    { path: 'view/:id', component: SpecificEcgComponent },
    { path: 'new', component: EcgFormComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class EcgRoutingModule {

}
