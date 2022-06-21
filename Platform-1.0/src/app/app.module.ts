import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {PathologyModule} from "./pathology/pathology.module";
import {EcgModule} from "./ecg/ecg.module";
import {PatientModule} from "./patient/patient.module";
import {StaffModule} from "./staff/staff.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
