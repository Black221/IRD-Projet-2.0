import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pathology-ecg-ul',
  templateUrl: './pathology-ecg-ul.component.html',
  styleUrls: ['./pathology-ecg-ul.component.css']
})
export class PathologyEcgUlComponent implements OnInit {
    pathology: any;
    @Input() link: any;
    ecgs: any;

  constructor() { }

  ngOnInit(): void {
  }

}
