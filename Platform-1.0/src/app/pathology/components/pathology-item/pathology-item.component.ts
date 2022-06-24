import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pathology-item',
  templateUrl: './pathology-item.component.html',
  styleUrls: ['./pathology-item.component.css']
})
export class PathologyItemComponent implements OnInit {
    @Input() patient: any;

  constructor() { }

  ngOnInit(): void {
  }


}
