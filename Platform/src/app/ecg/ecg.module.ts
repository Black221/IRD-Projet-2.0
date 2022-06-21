import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../core/services/auth/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import {EcgComponent} from "./components/ecg/ecg.component";
import {EcgLiComponent} from "./components/ecg-li/ecg-li.component";
import {EcgFormComponent} from "./components/ecg-form/ecg-form.component";
import {SpecificEcgComponent} from "./components/specific-ecg/specific-ecg.component";
import {RouterModule} from "@angular/router";
import {CoreModule} from "../core/core.module";
import {EcgRoutingModule} from "./ecg-routing.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
        EcgComponent,
        EcgLiComponent,
        EcgFormComponent,
        SpecificEcgComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        EcgRoutingModule,
    ],
    exports: [
        EcgComponent,
        EcgLiComponent,
        EcgFormComponent,
        SpecificEcgComponent
    ]
})
export class EcgModule { }
