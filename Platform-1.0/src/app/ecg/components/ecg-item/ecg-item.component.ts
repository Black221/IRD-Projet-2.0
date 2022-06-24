import {Component, Input, Output, OnInit} from '@angular/core';
import {PatientService} from "../../../core/services/patient/patient.service";
import {PathologyService} from "../../../core/services/pathology/pathology.service";
import {MetadataService} from "../../../core/services/metadata.service";

@Component({
    selector: 'app-ecg-item',
    templateUrl: './ecg-item.component.html',
    styleUrls: ['./ecg-item.component.css']
})
export class EcgItemComponent implements OnInit {
    @Input() ecg: any;
    patient: any;
    pathology: any;
    @Output() metadata: any;
    // @ts-ignore
    @Input() id: number;

    constructor(
        private patientService: PatientService,
        private pathologyService: PathologyService,
        private metadataService: MetadataService
    ) { }

    ngOnInit(): void {
        this.patientService.getSpecificPatient(this.ecg.patient_id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    console.log(res);
                    // @ts-ignore
                    if (typeof res !== "string" && res.patient!== undefined) {
                        // @ts-ignore
                        this.patient = res.patient;
                    }
                }
            }
        )
        this.pathologyService.getSpecificPathology(this.ecg.dataset_id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    console.log(res);
                    // @ts-ignore
                    if (typeof res !== "string" && res.pathology!== undefined) {
                        // @ts-ignore
                        this.pathology = res.pathology;
                    }
                }
            }
        )
        this.metadataService.getSpecificMetadata(this.ecg.metadata_id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    console.log(res);
                    // @ts-ignore
                    if (typeof res !== "string" && res.metadata!== undefined) {
                        // @ts-ignore
                        this.metadata = res.metadata;
                    }
                }
            }
        )
    }

}
