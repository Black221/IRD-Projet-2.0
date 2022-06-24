import { Component, OnInit } from '@angular/core';
import {EcgService} from "../../../core/services/ecg/ecg.service";
import {AuthService} from "../../../core/services/auth/auth.service";
import {PatientService} from "../../../core/services/patient/patient.service";
import {PathologyService} from "../../../core/services/pathology/pathology.service";
import {MetadataService} from "../../../core/services/metadata.service";

@Component({
    selector: 'app-ecg',
    templateUrl: './ecg.component.html',
    styleUrls: ['./ecg.component.css']
})
export class EcgComponent implements OnInit {
    // @ts-ignore
    ecgs: any[] = [];
    pathology !: string;
    patient !: string;
    ecgServer: any;
    created = false;
    update = false;

    constructor(
        private authService: AuthService,
        private ecgService: EcgService,
        private metadataService: MetadataService
    ) { }

    ngOnInit(): void {
        console.log(this.authService.auth);
        this.ecgService.getAllEcg().then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    this.ecgServer = res;
                    console.log(res);
                    // @ts-ignore
                    if (typeof res !== "string" && res.ecgs[0]!== undefined) {
                        this.ecgs = this.ecgServer.ecgs;
                    }
                }
            }
        );
    }

    onDelete () {

    }

    onUpdate () {

    }

    filterEcg($event: String) {
        // @ts-ignore

       console.log($event)
    }
}
