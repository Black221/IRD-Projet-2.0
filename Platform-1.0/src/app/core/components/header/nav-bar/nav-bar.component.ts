import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    constructor() { }
    ngOnInit(): void {
    }
    @Output() searchcriteria = new EventEmitter<String>();
    //@ts-ignore
    searchword: string;
    searchThis() {
        //@ts-ignore
        this.searchcriteria.emit(this.searchword)
    }
    onSearchChange(event: Event) {
      //@ts-ignore
        console.log(event.target.value)
    }
}
