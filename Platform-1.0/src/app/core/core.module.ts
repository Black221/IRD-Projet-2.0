import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/header/filter/filter.component';
import { NavBarComponent } from './components/header/nav-bar/nav-bar.component';
import { ActivityComponent } from './components/activity/activity.component';
import {EcgService} from "./services/ecg/ecg.service";
import {PathologyService} from "./services/pathology/pathology.service";
import {PatientService} from "./services/patient/patient.service";
import {StaffService} from "./services/staff/staff.service";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        FilterComponent,
        NavBarComponent,
        ActivityComponent
    ],
    exports: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        FilterComponent,
        NavBarComponent,
        ActivityComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [
        EcgService,
        PathologyService,
        PatientService,
        StaffService,

    ]
})
export class CoreModule { }
