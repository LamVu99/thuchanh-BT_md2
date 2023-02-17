type Gender = 'MALE' | 'FEMALE' | 'OTHER'
class Employee {
    ID: number;
    fullname: string;
    gender: Gender;
    birthday: Date;
    email: string;
    phonenumber: string;
    constructor(ID: number,
        fullname: string,
    gender: Gender,
    birthday: Date,
    email: string,
    phonenumber: string) {
        this.ID = ID;
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phonenumber = phonenumber;
    }
    getFullname():string {
        return this.fullname
    }
    getGender(): Gender {
        return this.gender
    }
    getBirthday(): Date {
        return this.birthday
    }
    getEmail(): string {
        return this.email
    }
    getPhonenumber(): string {
        return this.phonenumber
    }
    setFullname(fullname: string) {
        this.fullname = fullname
    }
    setGender(gender: Gender) {
        this.gender = gender;
    }
    setBirthday(birthday: Date) {
        this.birthday = birthday;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setPhonenumber(phonenumber: string) {
        this.phonenumber = phonenumber;
    }
    getID(): number {
        return this.ID;
    }
}
class EmployeeManager {
    employees: Employee[] = [];
    constructor() {
    }
    getList(): Employee[] {
        return this.employees
    }
    add(employee: Employee): void {
        this.employees.push(employee)
    }
findEmployee(ID: number) {
        let index = -1;
    for (let i = 0; i < this.employees.length; i++) {
        if(this.employees[i].getID() === ID){
            index = i;
        }
    }
    return index;
}
deleteEmployee(ID: number) {
        if (this.findEmployee(ID) != -1) {
            this.employees.splice(this.findEmployee(ID), 1)
        }
    }
    updateEmployee(ID: number,
                   fullname: string,
                   gender: Gender,
                   birthday: Date,
                   email: string,
                   phonenumber: string) {
        if(this.findEmployee(ID) != -1) {
            this.employees[this.findEmployee(ID)].setFullname(fullname);
            this.employees[this.findEmployee(ID)].setGender(gender);
            this.employees[this.findEmployee(ID)].setBirthday(birthday);
            this.employees[this.findEmployee(ID)].setEmail(email);
            this.employees[this.findEmployee(ID)].setPhonenumber(phonenumber);
        } else {
            throw new Error('Update error!')
        }
    }
}
let employee1 = new Employee(1123, 'LamVu1', 'MALE', new Date(1999,6,8),'dange680123@gmail.com', '0903244451')
let employee2 = new Employee(1124, 'LamVu2', 'MALE', new Date(1998,7,4),'dange680131@gmail.com', '0903244452')
let employee3 = new Employee(1125, 'LamVu3', 'FEMALE', new Date(1997,8,5),'dange68021@gmail.com', '0903244453')
let employee4 = new Employee(1126, 'LamVu4', 'OTHER', new Date(1996,9,3),'dange680411@gmail.com', '0903244454')
let emPloyess = new EmployeeManager()
emPloyess.add(employee1)
emPloyess.add(employee2)
emPloyess.add(employee3)
emPloyess.add(employee4)
emPloyess.updateEmployee(1126, 'LamVu21','OTHER', new Date(1974,5,4), 'dange1995@gmail.com', '0323134231')
emPloyess.updateEmployee(1125, 'LamVu213','MALE', new Date(1974,5,4), 'dange1995@gmail.com', '0323134231')
emPloyess.deleteEmployee(1123)
console.log(emPloyess.getList())
