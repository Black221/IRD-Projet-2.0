import { Component, OnInit } from '@angular/core';
import {StaffService} from "../../../core/services/staff/staff.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-specific-staff',
  templateUrl: './specific-staff.component.html',
  styleUrls: ['./specific-staff.component.css']
})
export class SpecificStaffComponent implements OnInit {

    // @ts-ignore
    staff: StaffModel;
    link: any;
    id: any;
    constructor(
        private staffService: StaffService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['id'];
        this.getStaff(id);
    }

    getStaff (id: string) {
        this.staffService.getSpecificStaff(id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    if (typeof res !== "string" && res.staff !== undefined) {
                        // @ts-ignore
                        this.staff = res.staff;
                    }
                    console.log(res);
                }
            }
        );
    }
}
