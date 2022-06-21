import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {StaffModel} from "../models/staff.model";
import {Observable} from "rxjs";
import {StaffService} from "../services/staff/staff.service";

@Injectable()

export class StaffResolver implements Resolve<StaffModel[]>{

    constructor(
        private staffService: StaffService
    ) {
    }
    // @ts-ignore
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StaffModel[]> {
    }
}
