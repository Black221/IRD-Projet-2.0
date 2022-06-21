export class StaffModel {
    static index = 1;
    constructor(
        public _id:string,
        public numberStaff:string,
        public sex:string,
        public firstname: string,
        public lastname: string,
        public email: string,
        public cni: string,
        public birthday: string,
        public nationality: string,
        public login: string,
        public password: string,
        public profession: string,
        public permission: string,
        public phone: string,
        public address: {
            address: "",
            city: "",
            country: ""
        },
        public id: number
    ) {
        this.id = StaffModel.index;
        StaffModel.index ++;
    }
}
