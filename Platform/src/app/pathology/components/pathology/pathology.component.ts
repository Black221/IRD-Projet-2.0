import { Component, OnInit } from '@angular/core';
import {PathologyService} from "../../../core/services/pathology/pathology.service";

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
    // @ts-ignore
    pathologies: any[];
    pathologyServer : any;

    constructor(
        private pathologyService: PathologyService
    ) { }

    ngOnInit(): void {
        setTimeout( () =>{
            this.pathologyService.getAllPathology().then(
                (res) => {
                    // @ts-ignore
                    if (!res) {
                        console.log(res);
                    } else {
                        // @ts-ignore
                        this.pathologyServer = res;
                        if (this.pathologyServer.pathologies[0] !== undefined)
                            this.pathologies = this.pathologyServer.pathologies;
                        console.log(res);
                    }
                }
            );
        }, 200)
    }

    onDelete () {

    }

    onUpdate () {

    }

}
