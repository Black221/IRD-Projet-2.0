import { Component, OnInit } from '@angular/core';
import {StaffModel} from "../../../core/models/staff.model";

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

  constructor() { }

  ngOnInit(): void {
  }

}
