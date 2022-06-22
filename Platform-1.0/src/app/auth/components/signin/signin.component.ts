import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";
import {AuthModel} from "../../../core/models/auth.model";
import {HeaderComponent} from "../../../core/components/header/header.component";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    // @ts-ignore
    headerComponent: HeaderComponent;
    signInForm!: FormGroup;
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
                    // @ts-ignore
                    this.authService.setToken(res.token);
                    // @ts-ignore
                    this.authService.setUserId(res.UserId)
                    this.authService.setIsAuth(true);
                    console.log(this.authService.getIsAuth())
                    this.router.navigateByUrl('/home');
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
