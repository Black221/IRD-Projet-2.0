import { Component, OnInit } from '@angular/core';
import {EcgService} from "../services/ecg.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-ecg',
  templateUrl: './ecg.component.html',
  styleUrls: ['./ecg.component.css']
})
export class EcgComponent implements OnInit {
    // @ts-ignore
    ecgs: any[];
    ecgServer: any;

    constructor(
        private authService: AuthService,
        private ecgService: EcgService
    ) { }

    ngOnInit(): void {
        console.log(this.authService.auth);
        this.ecgService.getAllEcg().then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    this.ecgServer = res;
                    console.log(res);
                    if (this.ecgServer.ecgs[0] !== undefined)
                    this.ecgs = this.ecgServer.ecgs;
                }
            }
        );
    }

    onDelete () {

    }

    onUpdate () {

    }

}
