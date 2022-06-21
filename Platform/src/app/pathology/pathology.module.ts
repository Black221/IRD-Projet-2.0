import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/core.module";
import {PathologyComponent} from "./components/pathology/pathology.component";
import {PathologyFormComponent} from "./components/pathology-form/pathology-form.component";
import {SpecificPathologyComponent} from "./components/specific-pathology/specific-pathology.component";
import {PathologyEcgUlComponent} from "./components/pathology-ecg-ul/pathology-ecg-ul.component";
import {EcgModule} from "../ecg/ecg.module";
import {PathologyRoutingModule} from "./pathology-routing.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
        PathologyComponent,
        PathologyFormComponent,
        SpecificPathologyComponent,
        PathologyEcgUlComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PathologyRoutingModule,
        EcgModule,
        SharedModule,

    ],
    exports: [

    ]
})
export class PathologyModule { }
