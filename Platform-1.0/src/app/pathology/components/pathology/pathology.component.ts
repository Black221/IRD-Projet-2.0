import { Component, OnInit } from '@angular/core';
import {PathologyService} from "../../../core/services/pathology/pathology.service";
import {array} from "joi";
import {Router} from "@angular/router";
import {MetadataService} from "../../../core/services/metadata.service";
import {MetadataModel} from "../../../core/models/metadata.model";
import {async} from "rxjs";

// @ts-ignore
@Component({
    selector: 'app-pathology',
    templateUrl: './pathology.component.html',
    styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
    // @ts-ignore
    pathologies: any[] = [];
    metadata: any[] = [];
    pathologyServer : any;
    created = false;
    name = false;
    update = false;

    constructor(
        private metadataService: MetadataService,
        private pathologyService: PathologyService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getPathologies();
    }

    getPathologies () {
        this.pathologyService.getAllPathology().then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    this.pathologyServer = res;
                    // @ts-ignore
                    if (typeof res !== "string" && res.pathologies[0] !== undefined) {
                        this.pathologies = this.pathologyServer.pathologies;
                        console.log(res);
                    }
                }
            }
        );
    }

    onDelete(id: string) {
        console.log(id)
        this.pathologyService.deletePathology(id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    console.log(res);
                    for (let i = 0; i < this.pathologies.length; i++) {
                        if (this.pathologies[i]._id === id) {
                            this.pathologies.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        );
    }

    onUpdate () {

    }
    getMetadata (id : string): any {
        this.metadataService.getSpecificMetadata(id).then(
            //@ts-ignore
            res => {
                if (res) {
                    //@ts-ignore
                    return res.metadata.createdAt;
                } else
                    return;
            }
        )
    }

    filterPathology($event: String) {
        // @ts-ignore
        if ($event === "created_at") {
            console.log($event)
            this.created = !this.created
            //@ts-ignore
            this.pathologies.sort((x, y) => {
                let a = x.metadata_id,
                    b = y.metadata_id;
                let mA: any, mB: any;
                // @ts-ignore
                mA = this.getMetadata(a) | async;
                // @ts-ignore
                mB = this.getMetadata(b) | async;
                if (this.created)
                    return mA == mB ? 0 : mA > mB ? 1 : -1;
                return mA == mB ? 0 : mA > mB ? -1 : 1;
            })
        } else  if ($event === "last_update") {
            this.update = !this.update
            // @ts-ignore
            this.pathologies.sort((x, y) => {
                let a = x.metadata_id,
                    b = y.metadata_id;
                let mA: any, mB: any;
                mA = this.getMetadata(a);
                mB = this.getMetadata(b);
                if (this.update)
                    return mA == mB ? 0 : mA > mB ? 1 : -1;
                return mA == mB ? 0 : mA > mB ? -1 : 1;
            })
        } else if  ($event === "name") {
            this.name = !this.name
            //@ts-ignore
            this.pathologies.sort((x, y) => {
                let a = x.name.toUpperCase(),
                    b = y.name.toUpperCase();

                if (this.name)
                    return a == b ? 0 : a > b ? 1 : -1;
                return a == b ? 0 : a > b ? -1 : 1;
            })
        }
    }
}
