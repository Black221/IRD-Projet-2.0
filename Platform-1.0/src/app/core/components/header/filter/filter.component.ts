import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    title: any;
    @Input() linkPrevious: any;
    @Input() linkNext: any;
    @Input() linkForm: any;

    constructor() { }

    ngOnInit(): void {

    }

}
