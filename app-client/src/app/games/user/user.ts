
export class User{
    public name: string;
    public email: string;
    public password: string;
    public phone: string;
    public role: string;

    constructor(name, email, password, phone, role){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.role = role;
    }

}