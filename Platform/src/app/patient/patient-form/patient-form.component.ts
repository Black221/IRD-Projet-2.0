import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
    //@ts-ignore
    patientForm: FormGroup;

    serverResponse: any;
    errorMessage: any;


    constructor(
        private formBuilder: FormBuilder,
        private patientService: PatientService,
        private router: Router
    ) { }

    private initForm() {
        this.patientForm = this.formBuilder.group(
            {
                firstname: ['', Validators.required],
                lastname: ['', Validators.required],
                birthday: ['', Validators.required],
                sex: ['', Validators.required],
                cni: ['', ],
                nationality: ['', Validators.required],
                address: ['', Validators.required],
                country: ['', Validators.required],
                city: ['', Validators.required],
                phone: ['', Validators.required]
            }
        );
    }


    onSubmit() {
        // @ts-ignore
        let patient = {
            // @ts-ignore
            firstname: this.patientForm.get('firstname').value,
            // @ts-ignore
            lastname: this.patientForm.get('lastname').value,
            // @ts-ignore
            birthday: this.patientForm.get('birthday').value,
            // @ts-ignore
            sex: this.patientForm.get('sex').value,
            // @ts-ignore
            cni: this.patientForm.get('cni').value,
            // @ts-ignore
            nationality: this.patientForm.get('nationality').value,
            // @ts-ignore
            address : {
                // @ts-ignore
                address:  this.patientForm.get('address').value,
                // @ts-ignore
                country:  this.patientForm.get('country').value,
                // @ts-ignore
                city:  this.patientForm.get('city').value,
            },
            // @ts-ignore
            phone:  this.patientForm.get('phone').value,
        };
        // @ts-ignore
        const auth = this.authService.getAuth();
        this.patientService.postPatient(auth, patient)
            .then((res) => {
                    this.serverResponse = res;
                    this.router.navigate(['/patients']);
                }, (error) => {
                    this.errorMessage = error ;
                }
            )
        console.log(this.serverResponse);
    }

    ngOnInit(): void {
        this.initForm();
    }

}
