import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EcgComponent } from './ecg/ecg.component';
import { SpecificEcgComponent } from './ecg/specific-ecg/specific-ecg.component';
import { PatientComponent } from './patient/patient.component';
import { SpecificPatientComponent } from './patient/specific-patient/specific-patient.component';
import { StaffComponent } from './staff/staff.component';
import { SpecificStaffComponent } from './staff/specific-staff/specific-staff.component';
import { StaffFormComponent } from './staff/staff-form/staff-form.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';
import { EcgFormComponent } from './ecg/ecg-form/ecg-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './header/filter/filter.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import {EcgService} from "./services/ecg.service";
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {PatientService} from "./services/patient.service";
import {StaffService} from "./services/staff.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes} from "@angular/router";
import { PathologyComponent } from './pathology/pathology.component';
import { PathologyFormComponent } from './pathology/pathology-form/pathology-form.component';
import { SpecificPathologyComponent } from './pathology/specific-pathology/specific-pathology.component';
import {PathologyService} from "./services/pathology.service";
import { EcgLiComponent } from './ecg/ecg-li/ecg-li.component';
import { StaffActivityUlComponent } from './staff/staff-activity-ul/staff-activity-ul.component';
import { ActivityComponent } from './activity/activity.component';
import { PathologyEcgUlComponent } from './pathology/pathology-ecg-ul/pathology-ecg-ul.component';
import { PatientEcgUlComponent } from './patient/patient-ecg-ul/patient-ecg-ul.component';
import { HomeComponent } from './home/home.component';
import { ReturnLinkComponent } from './return-link/return-link.component';
import {CookieService} from "ngx-cookie-service";

const appRoutes: Routes = [
    { path: '', component: SigninComponent },
    { path: 'home', component: HomeComponent},
    { path: 'auth/signup', component: SignupComponent },
    { path: 'auth/signin', component: SigninComponent },
    { path: 'pathologies', component: PathologyComponent },
    { path: 'pathologies/view/:id', component: SpecificPathologyComponent },
    { path: 'pathologies/ecg/:id', component: PathologyEcgUlComponent },
    { path: 'pathologies/new', component: PathologyFormComponent },
    { path: 'ecgs', component: EcgComponent },
    { path: 'ecgs/view/:id', component: SpecificEcgComponent },
    { path: 'ecgs/new', component: EcgFormComponent },
    { path: 'patients', component: PatientComponent },
    { path: 'patients/view/:id', component: SpecificPatientComponent },
    { path: 'patients/ecg/:id', component: PatientEcgUlComponent },
    { path: 'patients/new', component: PatientFormComponent },
    { path: 'staffs', component: StaffComponent },
    { path: 'staffs/view/:id', component: SpecificStaffComponent },
    { path: 'staffs/activity/:id', component: StaffActivityUlComponent },
    { path: 'staffs/new', component: StaffFormComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        SigninComponent,
        EcgComponent,
        SpecificEcgComponent,
        PatientComponent,
        SpecificPatientComponent,
        StaffComponent,
        SpecificStaffComponent,
        StaffFormComponent,
        PatientFormComponent,
        EcgFormComponent,
        HeaderComponent,
        FooterComponent,
        FilterComponent,
        NavBarComponent,
        PathologyComponent,
        PathologyFormComponent,
        SpecificPathologyComponent,
        EcgLiComponent,
        StaffActivityUlComponent,
        ActivityComponent,
        PathologyEcgUlComponent,
        PatientEcgUlComponent,
        HomeComponent,
        ReturnLinkComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        AuthService,
        EcgService,
        PathologyService,
        AuthGuardService,
        PatientService,
        StaffService,
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
