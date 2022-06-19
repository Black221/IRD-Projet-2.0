import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EcgService} from "../../services/ecg.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {PathologyService} from "../../services/pathology.service";
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-ecg-form',
  templateUrl: './ecg-form.component.html',
  styleUrls: ['./ecg-form.component.css']
})
export class EcgFormComponent implements OnInit {

    //@ts-ignore
    ecgForm: FormGroup;
    pathologies: any;
    serverResponse: any;
    errorMessage: any;
    patients: any;


    constructor(
        private patientService: PatientService,
        private pathologyService: PathologyService,
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private ecgService: EcgService,
        private router: Router
    ) { }

    private initForm() {
        this.ecgForm = this.formBuilder.group(
            {
                pathology: ['', Validators.required],
                patient: ['', Validators.required],
                file: ['', Validators.required],
                recordingStart: ['', Validators.required],
                recordingEnd: ['', Validators.required],
                age: ['', Validators.required],
                height: ['', Validators.required],
                weight: ['', Validators.required],
                sex: ['', Validators.required]
            }
        );
        console.log(this.authService.auth)
    }


    onSubmit() {
        // @ts-ignore
        let ecg = {
            // @ts-ignore
            filepath: this.ecgForm.get('file').value,
            recording: {
                // @ts-ignore
                start_at: this.ecgForm.get('recordingStart').value,
                // @ts-ignore
                end_at: this.ecgForm.get('recordingEnd').value,
            },
            patient: {
                // @ts-ignore
                age: this.ecgForm.get('age').value,
                // @ts-ignore
                height: this.ecgForm.get('height').value,
                // @ts-ignore
                weight: this.ecgForm.get('weight').value,
                // @ts-ignore
                sex: this.ecgForm.get('sex').value
            }
        };
        // @ts-ignore
        const creater = this.authService.getAuth();
        // @ts-ignore
        const patient = this.patientService.getPatientByNameAndBirthDay(this.ecgForm.get('patient').value);
        // @ts-ignore
        const pathology = this.pathologyService.getPathologyByName(this.ecgForm.get('pathology').value)._id;
        this.ecgService.postEcg(creater, pathology, patient, ecg)
            .then((res) => {
                    this.serverResponse = res;
                    this.router.navigate(['/ecgs']);
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
