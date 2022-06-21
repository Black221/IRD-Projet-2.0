import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {PatientModule} from "./patient/patient.module";
import {AuthModule} from "./auth/auth.module";
import {EcgModule} from "./ecg/ecg.module";
import {PathologyModule} from "./pathology/pathology.module";
import {StaffModule} from "./staff/staff.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        PatientModule,
        AuthModule,
        EcgModule,
        PathologyModule,
        StaffModule,
        SharedModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
