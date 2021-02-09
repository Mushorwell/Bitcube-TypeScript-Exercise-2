import User from "./User";

class Customer implements User{
    forenames: string = "";
    surname: string = "";
    nickname?: string;
    emailAddress: string = "";
    role: string = "";
    dateCreated: Date;
    dateRemoved?: Date;
    locked: boolean = false;
    failedLoginAttempts: number = 0;

    lastLoginDate: Date;

    constructor(
        forenames: string,
        surname: string,
        nickname: string,
        emailAddress: string,
        role: string,
        dateCreated: Date,
        dateRemoved: Date,
        locked: boolean,
        failedLoginAttempts: number,
        lastLoginDate: Date
    ) {
        this.forenames = forenames;
        this.surname = surname;
        this.nickname = nickname;
        this.emailAddress = emailAddress;
        this.role = role;
        this.dateCreated = dateCreated;
        this.dateRemoved = dateRemoved;
        this.locked = locked;
        this.failedLoginAttempts = failedLoginAttempts;
        this.lastLoginDate = lastLoginDate;
    }

    firstName(){
        return this.nickname ? this.nickname : this.forenames.split(" ")[0];
    }
    fullName(){
        return this.firstName() + " " + this.surname;
    }
}
export default Customer;