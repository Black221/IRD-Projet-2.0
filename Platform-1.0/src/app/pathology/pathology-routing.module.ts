import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PathologyComponent} from "./components/pathology/pathology.component";
import {SpecificPathologyComponent} from "./components/specific-pathology/specific-pathology.component";
import {PathologyEcgListComponent} from "./components/pathology-ecg-list/pathology-ecg-list.component";
import {PathologyFormComponent} from "./components/pathology-form/pathology-form.component";


const routes: Routes = [
    { path: '', component: PathologyComponent },
    { path: 'view/:id', component: SpecificPathologyComponent },
    { path: 'ecgs/:id', component: PathologyEcgListComponent },
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
