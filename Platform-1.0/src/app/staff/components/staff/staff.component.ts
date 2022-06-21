import { Component, OnInit } from '@angular/core';
import {StaffModel} from "../../../core/models/staff.model";
import {StaffService} from "../../../core/services/staff/staff.service";
import {AuthService} from "../../../core/services/auth/auth.service";

@Component({
    selector: 'app-staff',
    templateUrl: './staff.component.html',
    styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

    //@ts-ignore
    staffs: StaffModel[];
    staffServer: any;
    id: any;

    constructor(
        private authService: AuthService,
        private staffService: StaffService
    ) { }

    ngOnInit(): void {
        console.log(this.authService.getIsAuth())
        this.staffService.getAllStaff().then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    this.staffServer = res;
                    this.staffs = this.staffServer.staffs;
                    console.log(res);
                }
            }
        )
    }

    onDelete () {

    }

    onUpdate () {

    }

}
