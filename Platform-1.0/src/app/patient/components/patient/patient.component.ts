import { Component, OnInit } from '@angular/core';
import {PatientModel} from "../../../core/models/patient.model";
import {PatientService} from "../../../core/services/patient/patient.service";
import {date} from "joi";

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
    // @ts-ignore
    patients: any[] = [];
    // @ts-ignore
    patientServer: any;

    constructor(
        private patientService: PatientService
    ) { }

    ngOnInit(): void {
        this.patientService.getAllPatient().then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    this.patientServer = res;
                    // @ts-ignore
                    if (typeof res !== "string" && res.patients[0] !== undefined)
                        // @ts-ignore
                        this.patients = res.patients;
                    // @ts-ignore
                    console.log(res.patients);
                }
            }
        );
    }

    onDelete(id: string) {
        console.log(id)
        this.patientService.deletePatient(id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    console.log(res);
                    for (let i = 0; i < this.patients.length; i++) {
                        if (this.patients[i]._id === id) {
                            this.patients.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        );

    }

    onUpdate () {

    }

}
