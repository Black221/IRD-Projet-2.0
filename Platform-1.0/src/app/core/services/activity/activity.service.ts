import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivityModel} from "../../models/activity.model";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
    activitySubject = new Subject<ActivityModel[]>();
    // @ts-ignore
    private activities: ActivityModel[] = [];

    constructor(private httpClient: HttpClient) {
    }
    emitPathologySubject() {
        this.activitySubject.next(this.activities.slice())
    }
}
