import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../../core/services/patient/patient.service";
import {EcgService} from "../../../core/services/ecg/ecg.service";
import {ActivatedRoute} from "@angular/router";
import {MetadataService} from "../../../core/services/metadata.service";

@Component({
  selector: 'app-patient-ecg-list',
  templateUrl: './patient-ecg-list.component.html',
  styleUrls: ['./patient-ecg-list.component.css']
})
export class PatientEcgListComponent implements OnInit {
    patient: any;
    ecgs: any;
    created =false;
    update = false;

    constructor(
        private patientService: PatientService,
        private ecgService: EcgService,
        private route: ActivatedRoute,
        private metadataService: MetadataService
    ) { }

    ngOnInit(): void {
        const id =  this.route.snapshot.params['id'];
        this.getPatient(id)
        this.getEcg(id)
    }

    getPatient(id : string)  {
        this.patientService.getSpecificPatient(id).then(
            res => {
                if (res)
                    //@ts-ignore
                    this.patient = res.patient;
            }
        )
    }

    getEcg (id : string)  {
        this.ecgService.getPatientEcg(id).then(
            res => {
                if (res)
                    //@ts-ignore
                    this.ecgs = res.ecgs;
            }
        )
    }

    onDelete(_id: any) {

    }

    filterEcg($event: String) {
        // @ts-ignore
        if ($event === "created_at") {
            this.created = !this.created
            //@ts-ignore
            this.ecgs.sort((x, y) => {
                let a = x.metadata_id,
                    b = y.metadata_id;
                let mA: any, mB: any;
                this.metadataService.getSpecificMetadata(a).then(
                    res => {
                        if (res) {
                            //@ts-ignore
                            mA = res.metadata.createdAt;
                        }
                    }
                )
                this.metadataService.getSpecificMetadata(b).then(
                    res => {
                        if (res) {
                            //@ts-ignore
                            mB = res.metadata.createdAt;
                        }
                    }
                )
                if (!this.created)
                    return mA == mB ? 0 : mA > mB ? 1 : -1;
                return mA == mB ? 0 : mA > mB ? -1 : 1;
            })
        } else  if ($event === "last_update") {
            this.update = !this.update
            //@ts-ignore
            this.ecgs.sort((x, y) => {
                let a = x.metadata_id,
                    b = y.metadata_id;
                let mA: any, mB: any;
                this.metadataService.getSpecificMetadata(a).then(
                    res => {
                        if (res) {
                            //@ts-ignore
                            mA = res.metadata.updatedAt;
                        }
                    }
                )
                this.metadataService.getSpecificMetadata(b).then(
                    res => {
                        if (res) {
                            //@ts-ignore
                            mB = res.metadata.updatedAt;
                        }
                    }
                )
                if (!this.update)
                    return mA == mB ? 0 : mA > mB ? 1 : -1;
                return mA == mB ? 0 : mA > mB ? -1 : 1;
            })
        }
    }
}
