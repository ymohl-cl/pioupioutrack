export class User {
    name: string;
    surname: string;
    email: string;
    password: string;
    connect: Date;

    constructor(name: string, surname: string, email: string, password: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.connect = new Date();
        this.Logged();
    }
    Logged(): boolean {
        if (this.name === ""){
            return false;
        }
        return true;
    }
}