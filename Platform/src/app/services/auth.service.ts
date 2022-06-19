import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "../models/auth.model";
import {Subject} from "rxjs";
import {ObjectId} from "mongodb";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    urlAuth = {
        logout: "http://localhost:3000/api/staff/logout",
        signin: "http://localhost:3000/api/auth/login",
        signup: "http://localhost:3000/api/auth/register",
        isAuth : "http://localhost:3000/api/auth/isauth"
    }

    isAuthSubject = new Subject<boolean>();
    // @ts-ignore
    private isAuth: boolean = false;
    auth:any = "62ab1f214e1b18406f2eab8f";

    constructor(private httpClient: HttpClient) {
    }

    emitIsAuth() {
        this.isAuthSubject.next(this.isAuth)
    }

    setIsAuth(isAuth: boolean) {
        this.isAuth = isAuth;
        this.emitIsAuth();
        console.log(this.isAuth);
    }

    getAuth() {
        return this.auth;
    }

    setAuth (id: any) {
        this.auth = id;
    }

    // @ts-ignore
    getIsAuth():boolean {
        this.httpClient.get(this.urlAuth.isAuth).subscribe(
            (res) => {
               console.log(res);
               return true;
            },
            (error) => {
                console.log(error);
                return false;
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
