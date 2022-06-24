import {Component, Input, OnInit} from '@angular/core';
import {PathologyService} from "../../../core/services/pathology/pathology.service";
import {EcgService} from "../../../core/services/ecg/ecg.service";
import {ActivatedRoute} from "@angular/router";
import {MetadataService} from "../../../core/services/metadata.service";

@Component({
    selector: 'app-pathology-ecg-list',
    templateUrl: './pathology-ecg-list.component.html',
    styleUrls: ['./pathology-ecg-list.component.css']
})
export class PathologyEcgListComponent implements OnInit {
    pathology: any;
    @Input() link: any;
    ecgs: any;
    created = false;
    update = false;

    constructor(
        private pathologyService: PathologyService,
        private ecgService: EcgService,
        private route: ActivatedRoute,
        private metadataService: MetadataService
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.getPathology(id);
        this.getEcg(id);
    }

    getPathology (id: string) {
        this.pathologyService.getSpecificPathology(id).then(
            res => {
                if (res)
                    //@ts-ignore
                    this.pathology = res.pathology
            }
        )
    }

    getEcg (id: string) {
        this.ecgService.getPathologyEcg(id).then(
            res => {
                if (res)
                    //@ts-ignore
                    this.ecgs = res.ecgs;
            }
        )
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
