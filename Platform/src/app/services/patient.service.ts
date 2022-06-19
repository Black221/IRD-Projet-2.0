import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PatientModel} from "../models/patient.model";
import {ObjectId} from "mongodb";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
    patientSubject = new Subject<PatientModel[]>();
    // @ts-ignore
    private patients: any;

    constructor(private httpClient: HttpClient) {

    }

    emitPatientSubject() {
        this.patientSubject.next(this.patients.slice())
    }

    urlPatient = {
        getAll : "http://localhost:5200/patient/getAll/",
        getOne : "http://localhost:5200/patient/getOne/",
        post : "http://localhost:5200/patient/postOne/",
        delete : "http://localhost:5200/patient/deleteOne/",
        update : "http://localhost:5200/patient/updateOne/"
    }

    getAllPatient() {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlPatient.getAll).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    };

    // @ts-ignore
    getPatientByNameAndBirthDay(nameBirthDay: string) {
        const name = nameBirthDay.split('-')[0];
        // @ts-ignore
        const birthday = Date(nameBirthDay.split('-')[1]);
        for (const patient of this.patients) {
            if (patient.firstname === name.split('_')[0] &&
                patient.lastname === name.split('_')[1] &&
                patient.birthday === birthday)
                return patient;
        }
    }

    getSpecificPatient(id: ObjectId) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlPatient.getOne+id).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    };

    postPatient(doctor: string, patient: any) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.post(this.urlPatient.post+doctor, patient).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    };

    updatePatient(id: ObjectId, patient: any) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.put(this.urlPatient.update+id, patient).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    };

    deletePatient(id: ObjectId) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.delete(this.urlPatient.delete+id).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    };
}
