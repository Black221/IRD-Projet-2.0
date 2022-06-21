import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PathologyComponent} from "./components/pathology/pathology.component";
import {SpecificPathologyComponent} from "./components/specific-pathology/specific-pathology.component";
import {PathologyEcgUlComponent} from "./components/pathology-ecg-ul/pathology-ecg-ul.component";
import {PathologyFormComponent} from "./components/pathology-form/pathology-form.component";


const routes: Routes = [
    { path: '', component: PathologyComponent },
    { path: 'view/:id', component: SpecificPathologyComponent },
    { path: 'ecg/:id', component: PathologyEcgUlComponent },
    { path: 'new', component: PathologyFormComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class PathologyRoutingModule {

}
