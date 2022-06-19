import { Injectable } from '@angular/core';
import {ObjectId} from "mongodb";
import {EcgMetadataModel} from "../models/ecgMetadata.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EcgMetadataMetadataService {

    constructor(
        private httpClient: HttpClient
    ) { }


    urlEcgMetadata = {
        getAll : "http://localhost:5200/ecgMetadata/getAll/",
        getOne : "http://localhost:5200/ecgMetadata/getOne/",
        post : "http://localhost:5200/ecgMetadata/postOne/",
        delete : "http://localhost:5200/ecgMetadata/deleteOne/",
        update : "http://localhost:5200/ecgMetadata/updateOne/"
    }

    getAllEcgMetadata() {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlEcgMetadata.getAll).subscribe(
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

    getSpecificEcgMetadata(id: ObjectId) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlEcgMetadata.getOne+id).subscribe(
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

    postEcgMetadata(EcgMetadata: EcgMetadataModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.post(this.urlEcgMetadata.post, EcgMetadata).subscribe(
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

    updateEcgMetadata(id: ObjectId, EcgMetadata: EcgMetadataModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.put(this.urlEcgMetadata.update+id, EcgMetadata).subscribe(
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

    deleteEcgMetadata(id: ObjectId) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.delete(this.urlEcgMetadata.delete+id).subscribe(
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
}
