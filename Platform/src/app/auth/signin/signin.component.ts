import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AuthModel} from "../../models/auth.model";
import {StaffModel} from "../../models/staff.model";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    // @ts-ignore
    headerComponent: HeaderComponent;
    // @ts-ignore
    signInForm: FormGroup;
    // @ts-ignore
    errorMessage: any;
    // @ts-ignore
    isAuth: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,

        private router: Router) { }

    ngOnInit(): void {
        this.initForm();
    }

     initForm() {
        this.signInForm = this.formBuilder.group(
            {
                login: ['', Validators.required],
                password: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
            }
        );
    }
    onSubmit() {
        // @ts-ignore
        const login = this.signInForm.get('login').value;
        // @ts-ignore
        const password = this.signInForm.get('password').value;
        const auth: AuthModel = {
            login: login,
            password: password
        }
        // @ts-ignore
        this.authService.login(auth)
            .then((res) => {
                if (res) {
                    this.isAuth = true;
                    // @ts-ignore
                    console.log(res, this.isAuth);
                    this.authService.auth = res;
                    console.log(this.authService.auth);
                    this.authService.setIsAuth(this.isAuth);
                    this.router.navigate(['/home']);
                } else {
                    this.errorMessage = "Try again"
                    this.isAuth = false;
                }
            }, (error) => {
                this.errorMessage = error.error;
                console.log(error)
        })
    }
}
