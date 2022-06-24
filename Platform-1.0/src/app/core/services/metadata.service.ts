import { Injectable } from '@angular/core';
import {ObjectId} from "mongodb";
import {MetadataModel} from "../models/metadata.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

    constructor(
        private httpClient: HttpClient
    ) { }

    urlMetadata = {
        getAll : "http://localhost:5200/metadata/getAll/",
        getOne : "http://localhost:5200/metadata/get/specific/",
        post : "http://localhost:5200/metadata/postOne/",
        delete : "http://localhost:5200/metadata/deleteOne/",
        update : "http://localhost:5200/metadata/updateOne/"
    }

    getAllMetadata() {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlMetadata.getAll).subscribe(
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

    getSpecificMetadata(id: string) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.get(this.urlMetadata.getOne+id).subscribe(
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

    postMetadata(metadata: MetadataModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.post(this.urlMetadata.post, metadata).subscribe(
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

    updateMetadata(id: ObjectId, metadata: MetadataModel) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.put(this.urlMetadata.update+id, metadata).subscribe(
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

    deleteMetadata(id: ObjectId) {
        return new Promise (
            (resolve, reject) => {
                this.httpClient.delete(this.urlMetadata.delete+id).subscribe(
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
