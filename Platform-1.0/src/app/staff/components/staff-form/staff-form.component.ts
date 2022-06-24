import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {StaffService} from "../../../core/services/staff/staff.service";
import {AuthService} from "../../../core/services/auth/auth.service";

@Component({
    selector: 'app-staff-form',
    templateUrl: './staff-form.component.html',
    styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit {

    // @ts-ignore
    staff: any;
    newStaff: any;
    // @ts-ignore
    signUpForm: FormGroup;
    errorMessage: any;
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router) { }

    ngOnInit(): void {
        this.initForm();
    }

    private initForm () {
        this.signUpForm = this.formBuilder.group(
            {
                firstname: ['', Validators.required],
                lastname: ['', Validators.required],
                cni: [''],
                sex: ['', Validators.required],
                email: [''],
                phone: [''],
                birthday: ['', Validators.required],
                nationality: [''],
                login: ['', Validators.required],
                password: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
                profession: [''],
                address: [''],
                city: [''],
                country: [''],
            }
        );
    }

    onSubmit() {
        // @ts-ignore
        // @ts-ignore
        this.staff = {
            // @ts-ignore
            firstname : this.signUpForm.get('firstname').value,
            // @ts-ignore
            lastname : this.signUpForm.get('lastname').value,
            // @ts-ignore
            sex : this.signUpForm.get('sex').value,
            // @ts-ignore
            email : this.signUpForm.get('email').value,
            address : {
                // @ts-ignore
                city : this.signUpForm.get('city').value,
                // @ts-ignore
                address : this.signUpForm.get('address').value,
                // @ts-ignore
                country : this.signUpForm.get('country').value,
            },
            // @ts-ignore
            cni : this.signUpForm.get('cni').value,
            // @ts-ignore
            birthday : this.signUpForm.get('birthday').value,
            // @ts-ignore
            nationality : this.signUpForm.get('nationality').value,
            // @ts-ignore
            login : this.signUpForm.get('login').value,
            // @ts-ignore
            password : this.signUpForm.get('password').value,
            // @ts-ignore
            phone : this.signUpForm.get('phone').value,
            // @ts-ignore
            profession : this.signUpForm.get('profession').value,
        }

        this.newStaff = this.authService.signUpStaff(this.staff)
            .then(() => {
                this.router.navigate(['/staffs']);
            }, (error) => {
                this.errorMessage = error.message;
            })
    }
}

