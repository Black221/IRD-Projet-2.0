import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SigninComponent} from "../../../auth/components/signin/signin.component";
import {Observable} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    // @ts-ignore
    isAuth!:boolean;
    @Input() title: any;
    // @ts-ignore
    errorMessage: string;
    cookie: any;
    private content: any;
    constructor(
        private authService: AuthService,
        private router: Router,
        private httpClient: HttpClient
    ) {
    }

    ngOnInit(): void {
        // @ts-ignore

    }

    onLogout() {
        // @ts-ignore
        this.authService.logout().then((res) => {
            console.log(res);
            this.router.navigate(['']);
        }, (error) => {
            this.errorMessage = error.error;
            console.log(error)
        })
    }

    onSearchChange($event: Event) {

    }

    newArray: any
    searchThis(data: any) {
        this.content = this.newArray
        console.log(data)
        if (data) {
            this.content = this.content.filter(function (ele: { name: string; }, i: any, array: any) {
                let arrayelement = ele.name.toLowerCase()
                return arrayelement.includes(data)
            })
        }
        else {
            console.log(this.content)
        }
        console.log(this.content)
    }
}
