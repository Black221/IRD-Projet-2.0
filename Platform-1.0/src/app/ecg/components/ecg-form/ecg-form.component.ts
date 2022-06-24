import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EcgService} from "../../../core/services/ecg/ecg.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth/auth.service";
import {PathologyService} from "../../../core/services/pathology/pathology.service";
import {PatientService} from "../../../core/services/patient/patient.service";
import {EcgMetadataService} from "../../../core/services/ecg/ecg-metadata.service";

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
    errorMessage: any = "";
    patients: any;


    constructor(
        private patientService: PatientService,
        private pathologyService: PathologyService,
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private ecgService: EcgService,
        private ecgMetadataService: EcgMetadataService,
        private router: Router
    ) { }

    private initForm() {

        this.ecgForm = this.formBuilder.group(
            {
                cardiac_diseases: [''],
                pathology: ['',Validators.required],
                patient: ['',Validators.required],
                ecgFile: ['', Validators.required],
                recordingStart: [''],
                recordingEnd: [''],
                age: ['', Validators.required],
                height: ['', Validators.required],
                weight: ['', Validators.required],
                sex: ['', Validators.required]
            }
        );
    }


    onSubmit() {
        // @ts-ignore
        const file: FormData = new FormData();
        // @ts-ignore
        file.append('ecgFile', this.ecgForm.get('ecgFile').value)
        let ecg: Object = {
            // @ts-ignore
            cardiac_diseases: this.ecgForm.get('cardiac_diseases').value,
            recording: {
                // @ts-ignore
                started_at: this.ecgForm.get('recordingStart').value,
                // @ts-ignore
                ended_at: this.ecgForm.get('recordingEnd').value,
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
        const patient = this.ecgForm.get('patient').value;
        // @ts-ignore
        const pathology = this.ecgForm.get('pathology').value;
        let saveEcg = {};
        this.ecgService.postEcg(creater, pathology, patient, ecg)
        .then((resEcg) => {
            // @ts-ignore
            saveEcg = resEcg.ecg;
            // @ts-ignore
            this.ecgMetadataService.postEcgMetadata(creater, saveEcg._id, ecg)
                .then((resMeta) => {
                    // @ts-ignore
                    this.ecgService.postFile(saveEcg._id, file)
                        .then((res) => {
                            // @ts-ignore
                            console.log(res);
                        }, (error) => {
                            this.errorMessage = error ;
                            console.log(this.errorMessage);
                        })
                    this.router.navigateByUrl('/ecgs');
                    console.log(resMeta);
                }, (error) => {
                    this.errorMessage = error ;
                    console.log(this.errorMessage);
                })
        }, (error) => {
            this.errorMessage = error ;
            console.log(this.errorMessage);
        })

        // @ts-ignore
        console.log(creater, patient, pathology, ecg.ecgFile);
    }

    uploadFile(event: Event) {
        // @ts-ignore
        const file = (event.target as HTMLInputElement).files[0];
        this.ecgForm.patchValue({
            ecgFile: file,
        });
        // @ts-ignore
        this.ecgForm.get('ecgFile').updateValueAndValidity();
        // @ts-ignore
        console.log(this.ecgForm.get('ecgFile').value)
        console.log(this.ecgForm.value)
    }


    ngOnInit(): void {
        this.pathologyService.getAllPathology().then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    let pathologiesOnServer = res;
                    console.log(res);
                    // @ts-ignore
                    if (pathologiesOnServer.pathologies[0] !== undefined)
                        // @ts-ignore
                        this.pathologies = pathologiesOnServer.pathologies;
                }
            }
        );
        this.patientService.getAllPatient().then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    let patientOnSever = res;
                    console.log(res);
                    // @ts-ignore
                    if (patientOnSever.patients[0] !== undefined)
                        // @ts-ignore
                        this.patients = patientOnSever.patients;
                }
            }
        );
        this.initForm();
    }
}
