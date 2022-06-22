import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-specific-patient',
    templateUrl: './specific-patient.component.html',
    styleUrls: ['./specific-patient.component.css']
})
export class SpecificPatientComponent implements OnInit {
    patient: any;
    @Input() link: any;

    constructor() { }

    ngOnInit(): void {
    }

}
