
export class ActivityModel {

    constructor(
        public name: string,
        public created_at: string,
        public last_updated_at: Date,
        public last_view_at : Date,
        public objectName : string
    ) {}
}
