import User from "./User";
import Customer from "./Customer";

class SalesRep implements User{
    forenames: string;
    surname: string;
    nickname?: string;
    emailAddress: string;
    role: string;
    dateCreated: Date;
    dateRemoved?: Date;
    locked: boolean;
    failedLoginAttempts: number;

    customers: Customer[];

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
        customers: Customer[]
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
        this.customers = customers;
    }

    firstName(){
        return this.forenames.split(" ")[0];
    }
    fullName(){
        return this.firstName() + " " + this.surname;
    }
}
export default SalesRep;