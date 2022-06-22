import { Component, OnInit } from '@angular/core';
import {PathologyService} from "../../../core/services/pathology/pathology.service";
import {array} from "joi";
import {Router} from "@angular/router";

@Component({
    selector: 'app-pathology',
    templateUrl: './pathology.component.html',
    styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
    // @ts-ignore
    pathologies: any[] = [];
    pathologyServer : any;

    constructor(
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
                    if (typeof res !== "string" && res.pathologies[0] !== undefined)
                        this.pathologies = this.pathologyServer.pathologies;
                    console.log(res);
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

}
