import { Component, OnInit } from '@angular/core';
import {PathologyService} from "../../../core/services/pathology/pathology.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-specific-pathology',
  templateUrl: './specific-pathology.component.html',
  styleUrls: ['./specific-pathology.component.css']
})
export class SpecificPathologyComponent implements OnInit {
    pathology: any;
    link: any;

  constructor(
      private route: ActivatedRoute,
      private pathologyService: PathologyService,
  ) { }

  ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      setTimeout( () => {
          this.pathology = this.pathologyService.getPathologyByIndex(+id);
      }, 100)
  }

}
