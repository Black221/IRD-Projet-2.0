import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-return-link',
  templateUrl: './return-link.component.html',
  styleUrls: ['./return-link.component.css']
})
export class ReturnLinkComponent implements OnInit {

    @Input() link: any;

    constructor() { }

      ngOnInit(): void {
      }

}
