export class EcgMetadataModel {
    constructor(
        public _id: string,
        public ecg_id: string,
        public metadata_id: string,
        public recording: {
            start_at: Date,
            end_at: Date
        },
        public patient: {
            age: string,
            height: string,
            weight: string,
            sex: string
        }
    ) {}
}
