import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../core/services/auth/auth.service";
import {CoreModule} from "../core/core.module";



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        CoreModule
    ],
    providers: [
        AuthService
    ],
    exports: [
        SigninComponent,
        SignupComponent
    ]
})
export class AuthModule { }
