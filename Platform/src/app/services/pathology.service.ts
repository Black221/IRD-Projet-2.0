import { Injectable } from '@angular/core';
import {PathologyModel} from "../models/pathology.model";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ObjectId} from "mongodb";

@Injectable({
  providedIn: 'root'
})
export class PathologyService {
    pathologySubject = new Subject<PathologyModel[]>();
    // @ts-ignore
    private pathologiesOnServer: Observable<Object> = [];
    private pathologies: PathologyModel[] = [];
    private pathologyServer: any;

    constructor(private httpClient: HttpClient) {
        this.getAllPathology().then(
            (res) => {
                // @ts-ignore
                if (!res) {
                    console.log(res);
                } else {
                    // @ts-ignore
                    this.pathologyServer = res;
                    if (this.pathologyServer.pathologies[0] !== undefined)
                        this.pathologies = this.pathologyServer.pathologies;
                    console.log(res);
                }
            }
        );
    }

    urlPathology = {
        getAll : "http://localhost:5200/dataset/getAll/",
        getOne : "http://localhost:5200/dataset/getOne/",
        post : "http://localhost:5200/dataset/postOne/",
        delete : "http://localhost:5200/dataset/deleteOne/",
        update : "http://localhost:5200/dataset/updateOne/"
    }

    getAllPathology() {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlPathology.getAll).subscribe(
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

    getSpecificPathology(id: ObjectId) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlPathology.getOne+id).subscribe(
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

    postPathology(creater:string, pathology: PathologyModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.post(this.urlPathology.post+creater, pathology).subscribe(
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

    updatePathology(id: ObjectId, pathology: PathologyModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.put(this.urlPathology.update+id, pathology).subscribe(
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

    deletePathology(id: ObjectId) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.delete(this.urlPathology.delete+id).subscribe(
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

    getPathologyByIndex(index: number) {
        console.log(this.pathologies[0])
        return this.pathologies[+index - 1];
    }

    //@ts-ignore
    getPathologyByName(name: string) {
        for (const pathology of this.pathologies) {
            if (pathology.name === name)
                return pathology;
        }
    }
    emitPathologySubject() {
        this.pathologySubject.next(this.pathologies.slice())
    }
}
