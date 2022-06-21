import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-ecg-item',
    templateUrl: './ecg-item.component.html',
    styleUrls: ['./ecg-item.component.css']
})
export class EcgItemComponent implements OnInit {
    @Input() ecg: any;
    patient: any;
    // @ts-ignore
    @Input() id: number;

    constructor() { }

    ngOnInit(): void {
    }

}
