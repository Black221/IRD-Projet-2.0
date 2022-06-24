import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
    @Output() filter = new EventEmitter<String>();
    @Input() doName = false;
    @Input() doPathology: any;

    constructor() { }

    ngOnInit(): void {

    }

    filterBy($event: Event) {
        //@ts-ignore
        this.filter.emit($event.target.value);
    }
}
