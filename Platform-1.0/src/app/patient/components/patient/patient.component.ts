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
    firstname = true;
    lastname = false;
    birthday = false;
    sex = false;

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
                    this.filterFirstname()
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

    filterFirstname() {
        // @ts-ignore
        this.firstname = !this.firstname
        this.patients.sort((x, y) => {
            let a = x.firstname.toUpperCase(),
                b = y.firstname.toUpperCase();
            if (!this.firstname)
                return a == b ? 0 : a > b ? 1 : -1;
            return a == b ? 0 : a > b ? -1 : 1;
        })
    }

    filterLastname() {
        // @ts-ignore
        this.lastname = ! this.lastname
        this.patients.sort((x, y) => {
            let a = x.lastname.toUpperCase(),
                b = y.lastname.toUpperCase();
            if (!this.lastname)
                return a == b ? 0 : a > b ? 1 : -1;
            return a == b ? 0 : a > b ? -1 : 1;
        })
    }

    filterBirthday() {
        // @ts-ignore
        this.birthday = ! this.birthday
        this.patients.sort((x, y) => {
            let a = x.birthday.toUpperCase(),
                b = y.birthday.toUpperCase();
            if (!this.birthday)
                return a == b ? 0 : a > b ? 1 : -1;
            return a == b ? 0 : a > b ? -1 : 1;
        })
    }

    filterSex() {
        // @ts-ignore
        this.sex = ! this.sex
        this.patients.sort((x, y) => {
            let a = x.sex.toUpperCase(),
                b = y.sex.toUpperCase();
            if (!this.sex)
                return a == b ? 0 : a > b ? 1 : -1;
            return a == b ? 0 : a > b ? -1 : 1;
        })
    }
}
