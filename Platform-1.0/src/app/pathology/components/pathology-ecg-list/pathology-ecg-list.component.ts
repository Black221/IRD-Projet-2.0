import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-pathology-ecg-list',
    templateUrl: './pathology-ecg-list.component.html',
    styleUrls: ['./pathology-ecg-list.component.css']
})
export class PathologyEcgListComponent implements OnInit {
    pathology: any;
    @Input() link: any;
    ecgs: any;

    constructor() { }

    ngOnInit(): void {
    }

}
