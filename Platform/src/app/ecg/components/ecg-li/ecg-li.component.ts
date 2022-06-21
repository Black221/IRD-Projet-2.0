import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ecg-li',
  templateUrl: './ecg-li.component.html',
  styleUrls: ['./ecg-li.component.css']
})
export class EcgLiComponent implements OnInit {
    @Input() ecg: any;
    patient: any;
    // @ts-ignore
    @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
