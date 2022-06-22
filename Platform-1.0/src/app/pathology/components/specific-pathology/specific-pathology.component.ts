import { Component, OnInit } from '@angular/core';
import {PathologyService} from "../../../core/services/pathology/pathology.service";
import {ActivatedRoute} from "@angular/router";
import {async} from "rxjs";

@Component({
    selector: 'app-specific-pathology',
    templateUrl: './specific-pathology.component.html',
    styleUrls: ['./specific-pathology.component.css']
})
export class SpecificPathologyComponent implements OnInit {
    pathology: any = {};
    metadata: any = {};
    link = "/pathologies";

    constructor(
        private route: ActivatedRoute,
        private pathologyService: PathologyService,
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.getPathology(id)
    }

    getPathology (id: string) {
        this.pathologyService.getSpecificPathology(id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    if (typeof res !== "string" && res.pathology !== undefined) {
                        // @ts-ignore
                        this.pathology = res.pathology;
                        // @ts-ignore
                        this.metadata = res.metadata;
                    }

                    console.log(res);
                }
            }
        );
    }

}
