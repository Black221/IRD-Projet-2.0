import {Component, Input, OnInit} from '@angular/core';
import {MetadataService} from "../../../core/services/metadata.service";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {
    metadata: any;
    @Input() id!: string;

  constructor(
      private metadataService: MetadataService
  ) { }

  ngOnInit(): void {
      this.metadataService.getSpecificMetadata(this.id).then(
          res => {
              if (res) {
                  // @ts-ignore
                      this.metadata = res.metadata;
              }
          }
      )
  }

}
