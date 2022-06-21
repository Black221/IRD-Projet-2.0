import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {HomeComponent} from "./components/home/home.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ActivityComponent} from "./components/activity/activity.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FilterComponent} from "./components/header/filter/filter.component";
import {NavBarComponent} from "./components/header/nav-bar/nav-bar.component";
import {EcgService} from "./services/ecg/ecg.service";
import {PathologyService} from "./services/pathology/pathology.service";
import {PatientService} from "./services/patient/patient.service";
import {StaffService} from "./services/staff/staff.service";
import {CookieService} from "ngx-cookie-service";
import {httpInterceptorProviders} from "./interceptors";
import {StaffResolver} from "./resolvers/staff.resolver";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        ActivityComponent,
        FilterComponent,
        NavBarComponent
    ],
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        ActivityComponent,
        FilterComponent,
        NavBarComponent
    ],
    providers: [
        EcgService,
        PathologyService,
        PatientService,
        StaffService,
        CookieService,
        httpInterceptorProviders,
        StaffResolver
    ]
})
export class CoreModule { }
