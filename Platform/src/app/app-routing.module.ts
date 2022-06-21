import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SigninComponent} from "./auth/components/signin/signin.component";
import {HomeComponent} from "./core/components/home/home.component";
import {AuthGard} from "./core/gards/auth.gard";
const routes: Routes = [
    { path: '', component: SigninComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGard]},
    { path: 'auth', loadChildren: () => import('./auth/auth-routing.module').then(m => m.AuthRoutingModule) },
    { path: 'pathologies',  loadChildren: () => import('./pathology/pathology-routing.module').then(m => m.PathologyRoutingModule) },
    { path: 'ecgs', loadChildren: () => import('./ecg/ecg-routing.module').then(m => m.EcgRoutingModule)  },
    { path: 'patients', loadChildren: () => import('./patient/patient-routing.module').then(m => m.PatientRoutingModule)  },
    { path: 'staffs', loadChildren: () => import('./staff/staff-routing.module').then(m => m.StaffRoutingModule)  },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),

    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
