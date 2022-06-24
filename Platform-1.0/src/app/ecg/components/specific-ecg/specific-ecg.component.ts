import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router, Routes} from "@angular/router";
import {EcgService} from "../../../core/services/ecg/ecg.service";
import {EcgMetadataService} from "../../../core/services/ecg/ecg-metadata.service";
import {PatientService} from "../../../core/services/patient/patient.service";

@Component({
    selector: 'app-specific-ecg',
    templateUrl: './specific-ecg.component.html',
    styleUrls: ['./specific-ecg.component.css']
})
export class SpecificEcgComponent implements OnInit {
    ecg: any = {};
    ecgMetadata: any= {
        patient: {},
        recording: {}
    };
    metadata: any= {};
    patient: any = {};
    link = "/ecgs";

    constructor(
        private patientService: PatientService,
        private ecgService: EcgService,
        private ecgMetadataService: EcgMetadataService,
        private route: ActivatedRoute,
        private routes: Router
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.getSpecificEcg(id);
    }

    getPath () {
        return  '../../../../'+this.ecg.filepath.substring(84)
    }

    getSpecificEcg(id: string) {
        this.ecgService.getSpecificEcg(id).then(
            (res) => {
                // @ts-ignore
                if (typeof res !== "string" && res.ecg!== undefined) {
                    // @ts-ignore
                    this.ecg = res.ecg;
                    // @ts-ignore
                    if (res.ecgMetadata!== undefined)
                        // @ts-ignore
                        this.ecgMetadata = res.ecgMetadata;
                    // @ts-ignore
                    this.metadata = res.metadata;
                    this.patientService.getSpecificPatient(this.ecg.patient_id).then(
                        (res) => {
                            // @ts-ignore
                            if (typeof res !== "string" && res.patient!== undefined) {
                                // @ts-ignore
                                this.patient = res.patient;
                            }
                        }
                    )
                }
                console.log(res)
            }
        )

    }

    onDelete(id: string) {
        this.ecgService.deleteEcg(id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    this.routes.navigateByUrl('/ecgs')
                    console.log(res);
                }
            }
        );
    }
}
