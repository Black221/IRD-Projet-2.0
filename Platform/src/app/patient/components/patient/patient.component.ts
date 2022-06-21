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
    patients: any[];
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
                    // @ts-ignore
                    this.patientServer = res;
                    if (this.patientServer.patients[0] !== undefined)
                    this.patients = this.patientServer.patients;
                    console.log(res);
                }
            }
        );
    }



    onDelete () {

    }

    onUpdate () {

    }

}
