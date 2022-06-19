import { Component, OnInit } from '@angular/core';
import {StaffModel} from "../models/staff.model";
import {StaffService} from "../services/staff.service";

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
        private staffService: StaffService
    ) { }

    ngOnInit(): void {
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
        );
    }

    onDelete () {

    }

    onUpdate () {

    }

}
