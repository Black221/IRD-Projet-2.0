import { Component, OnInit } from '@angular/core';
import {PathologyService} from "../../services/pathology.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {PathologyModel} from "../../models/pathology.model";

@Component({
  selector: 'app-pathology-form',
  templateUrl: './pathology-form.component.html',
  styleUrls: ['./pathology-form.component.css']
})
export class PathologyFormComponent implements OnInit {
    // @ts-ignore
    pathologyForm: FormGroup;
    errorMessage: any;
    // @ts-ignore
    pathology : any;
    // @ts-ignore
    serverResponse : any;


    constructor(
        private authService: AuthService,
        private pathologyService: PathologyService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        console.log(this.authService.auth);
        this.initForm();
    }

    private initForm() {
        this.pathologyForm = this.formBuilder.group(
            {
                name: ['', Validators.required],
                description: ['', Validators.required]
            }
        );
    }


    onSubmit() {
        // @ts-ignore
        this.pathology = {
            // @ts-ignore
            name: this.pathologyForm.get('name').value,
            // @ts-ignore
            description: this.pathologyForm.get('description').value
        };
        // @ts-ignore
        this.pathologyService.postPathology(this.authService.getAuth(), this.pathology)
            .then((res) => {
                this.serverResponse = res;
                    this.router.navigate(['/pathologies']);
            }, (error) => {
                this.errorMessage = error ;
            }
        )
        console.log(this.errorMessage);
        console.log(this.serverResponse);
    }
}
