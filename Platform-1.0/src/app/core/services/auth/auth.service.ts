import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "../../models/auth.model";
import {Subject} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    private token!: string;
    private userId!: string;

    getToken (): string {
        return this.token;
    }
    private admin!:boolean;

    getUserId (): string {
        return this.userId;
    }

    setToken (token: string) {
        this.token = token;
        console.log(this.token)
    }

    setUserId (user: string) {
        this.userId = user;
    }

    urlAuth = {
        logout: "http://localhost:3000/api/staff/logout",
        signin: "http://localhost:3000/api/auth/login",
        signup: "http://localhost:3000/api/auth/register",
        isAuth : "http://localhost:3000/api/auth/isauth"
    }

    // @ts-ignore
    private isAuth!: boolean;
    auth:any = "62ab1f214e1b18406f2eab8f";

    getAuth () {
        return this.auth;
    }
    constructor(private httpClient: HttpClient) {
    }


    setIsAuth(isAuth: boolean) {
        this.isAuth = isAuth;
    }

    getIsAuth() {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlAuth.isAuth).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                )
            }
        )
    }


    login (auth: AuthModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.post(this.urlAuth.signin, auth).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                )
            }
        )
    }


    signUpStaff (auth: AuthModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.post(this.urlAuth.signup, auth).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                )
            }
        )
    }


    logout () {
        return new Promise(
            (resolve, reject) => {
                this.httpClient.post(this.urlAuth.logout, '').subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                )
            }
        )
    }
}
