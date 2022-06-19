import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-specific-ecg',
  templateUrl: './specific-ecg.component.html',
  styleUrls: ['./specific-ecg.component.css']
})
export class SpecificEcgComponent implements OnInit {
    ecg: any;
    patient: any;
    @Input() link: any;

  constructor() { }

  ngOnInit(): void {
  }

}
