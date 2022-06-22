import {Component, Input, OnInit} from '@angular/core';
import {PatientService} from "../../../core/services/patient/patient.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-specific-patient',
    templateUrl: './specific-patient.component.html',
    styleUrls: ['./specific-patient.component.css']
})
export class SpecificPatientComponent implements OnInit {
    patient: any;
    link = "/patients";

    constructor(
        private patientService: PatientService,
        private route: ActivatedRoute,
        private routes: Router
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.getPatient(id)
    }

    getPatient (id : string) {
        this.patientService.getSpecificPatient(id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    if (typeof res !== "string" && res.patient !== undefined) {
                        // @ts-ignore
                        this.patient = res.patient;
                    }
                    console.log(res);
                }
            }
        );
    }

    onDelete(id: string) {
        this.patientService.deletePatient(id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    this.routes.navigateByUrl('/patients')
                    console.log(res);
                }
            }
        );
    }
}
