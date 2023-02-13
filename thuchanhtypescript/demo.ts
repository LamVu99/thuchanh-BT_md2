class Person {
    private ssn: string;
    firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.firstName); // John
console.log(person.getFullName()); // John Doe