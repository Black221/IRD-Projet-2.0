import {Component, Input, OnInit} from '@angular/core';
import {PatientService} from "../../../core/services/patient/patient.service";

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit {
    @Input() patient: any;

  constructor(
      private patientService: PatientService
  ) { }

  ngOnInit(): void {
  }

    onDelete(id: string) {
        console.log(id)
        this.patientService.deletePatient(id).then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    console.log(res);

                }
            }
        );

    }
}
