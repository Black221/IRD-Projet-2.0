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
    constructor(
        private authService: AuthService,
        private router: Router,
        private httpClient: HttpClient
    ) {
    }

    ngOnInit(): void {
        // @ts-ignore
        let res = this.authService.getIsAuth();
        console.log(res)
        this.isAuth = this.authService.getIsAuth();
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

}
