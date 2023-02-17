class Employee {
    private _ID: number
    _lastname: string
    _firstname: string
    _birthday: Date
    _address: string
    _jobposition: string

    constructor(ID: number, lastname: string, firstname: string, birthday: Date, address: string, jobpositition: string) {
        this._ID = ID;
        this._lastname = lastname;
        this._firstname = firstname;
        this._birthday = birthday;
        this._address = address;
        this._jobposition = jobpositition;
    }

    get birthday(): Date {
        return this._birthday;
    }

    set setbirthday(value: Date) {
        this._birthday = value;
    }

    get firstname(): string {
        return this._firstname;
    }

    set setfirstname(value: string) {
        this._firstname = value;
    }

    get address(): string {
        return this._address;
    }

    set setaddress(value: string) {
        this._address = value;
    }

    get jobposition(): string {
        return this._jobposition;
    }

    set setjobposition(value: string) {
        this._jobposition = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set setlastname(value: string) {
        this._lastname = value;
    }

    get ID(): number {
        return this._ID;
    }
    getInfor() {
        return this;
    }
}

class EmployeeManager {
    static employees: Employee[] = []

    constructor() {
    }

    get getlist() {
        return EmployeeManager.employees
    }

   set add(employee: Employee) {
        EmployeeManager.employees.push(employee)
    }

    findEmployee(ID: number) {
        let index = -1;
        for (let i = 0; i < EmployeeManager.employees.length; i++) {
            if (EmployeeManager.employees[i].ID === ID) {
                index = i;
            }
        }
        return index
    }

    set deleteEmployee(ID: number) {
        if (this.findEmployee(ID) !== -1) {
            EmployeeManager.employees.splice(this.findEmployee(ID), 1);
        }
    }
    updateEmployee(ID: number,
                   allemployee: Employee) {
        console.log(this.findEmployee(ID))
        if (this.findEmployee(ID) !== -1) {
            EmployeeManager.employees[this.findEmployee(ID)] = allemployee
        } else {
            throw new Error('Update error!')
        }

    }
}
let p1: Employee = new Employee(123,'Vu','Lam',new Date(1999,8,6), 'Ha Noi','Tong Giam Doc');
let p2 = new Employee(124,'Nguyen','Nam',new Date(2004,9,6), 'Ha Noi','Pho Giam Doc');
let p3 = new Employee(125,'Hoang','Vuong',new Date(2002,12,1), 'Ha Noi','Thu Ki');
let p4 = new Employee(125,'Do','Phuong',new Date(2000,12,2), 'Ha Noi','Thu Ki2');
let emPloyee = new EmployeeManager();
emPloyee.add = p1
emPloyee.add = p2
emPloyee.add = p3
emPloyee.updateEmployee(125, p4)
console.log(emPloyee.getlist)