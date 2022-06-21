import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EcgModel} from "../../models/ecg.model";
import {ObjectId} from "mongodb";

@Injectable()
export class EcgService {
    ecgSubject = new Subject<EcgModel[]>();
    // @ts-ignore
    private ecgs: EcgModel[] = [];

    constructor(private httpClient: HttpClient) {
    }
    emitEcgSubject() {
        this.ecgSubject.next(this.ecgs.slice())
    }

    getSpecificEcgByPosition() {

    }

    urlEcg = {
        getAll : "http://localhost:5200/ecg/getAll/",
        getOne : "http://localhost:5200/ecg/getOne/",
        post : "http://localhost:5200/ecg/postOne/",
        delete : "http://localhost:5200/ecg/deleteOne/",
        update : "http://localhost:5200/ecg/updateOne/"
    }

    getAllEcg() {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlEcg.getAll).subscribe(
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

    getSpecificEcg(id: ObjectId) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlEcg.getOne+id).subscribe(
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

    postEcg(creater: string, pathology: string, patient: string, ecg: any) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.post(this.urlEcg.post+`${creater}/${pathology}/${patient}`, ecg).subscribe(
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

    updateEcg(id: ObjectId, ecg: EcgModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.put(this.urlEcg.update+id, ecg).subscribe(
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

    deleteEcg(id: ObjectId) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.delete(this.urlEcg.delete+id).subscribe(
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

    getEcgByIndex (index: number) {
        return this.ecgs[+index - 1];
    }
}
