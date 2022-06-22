import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {StaffModel} from "../../models/staff.model";
import {HttpClient} from "@angular/common/http";
import {ObjectId} from "mongodb";

@Injectable()
export class StaffService {


    urlStaff = {
        getAll: "http://localhost:3000/api/staff/all",
        getOne: "http://localhost:3000/api/staff/specific/",
        update: "http://localhost:3000/api/staff/update/",
        delete: "http://localhost:3000/api/staff/delete/",
        post: "http://localhost:3000/api/auth/register/"
    }
    staffSubject = new Subject<StaffModel[]>();
    // @ts-ignore
    private staffs: StaffModel[] = [];

    constructor(private httpClient: HttpClient) {
        // @ts-ignore
        this.staffs = this.getAllStaff();
    }

    getAllStaff() {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlStaff.getAll).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    getSpecificStaff(id: string) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlStaff.getOne+id).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    };

    postStaff(staff: StaffModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.post(this.urlStaff.post, staff).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    };

    updateStaff(id: string, staff: StaffModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.put(this.urlStaff.update+id, staff).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    };

    deleteStaff(id: string) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.delete(this.urlStaff.delete+id).subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    };

    emitStaffSubject() {
        this.staffSubject.next(this.staffs.slice())
    }
}
