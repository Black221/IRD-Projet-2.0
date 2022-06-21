import { Component, OnInit } from '@angular/core';
import {StaffModel} from "../../../core/models/staff.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit {


    // @ts-ignore
    staff:StaffModel;
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
                cni: ['', Validators.required],
                sex: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                birthday: ['', Validators.required],
                nationality: ['', Validators.required],
                login: ['', Validators.required],
                password: ['', [Validators.required, Validators.pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
                profession: ['', Validators.required],
                address: ['', Validators.required],
                city: ['', Validators.required],
                country: ['', Validators.required],
            }
        );
    }

    onSubmit() {
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
            profession : this.signUpForm.get('profession').value,
        }

        this.newStaff = this.authService.signUpStaff(this.staff)
            .then(() => {
                this.router.navigate(['/staff']);
            }, (error) => {
                this.errorMessage = error;
            })
    }
}
