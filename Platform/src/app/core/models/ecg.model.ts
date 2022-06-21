export  class EcgModel {

    constructor (
        public _id: string,
        public  dataset_name: string,
        public metadata_id: string,
        public patient_id: string,
        public numberEcg: string,
        public filename: string,
        public filepath: string,
    ) {}
}
