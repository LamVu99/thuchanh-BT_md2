class Staff {
    public name: string;
    public email: string;
    public age: number;
constructor(name:string, email:string, age:number) {

    this.name = name;
    this.email = email;
    this.age = age;
}
getName(): string {
    return this.name;
}
setName(name: string): void {
this.name = name;
}
setEmail(email: string): void {
    this.email = email;
}
setAge(age: number): void {
    this.age = age;
}
}
let staff = new Staff('LamVu', 'dange6801@gmail.com', 23);

let nameStaff = staff.getName();


console.log(nameStaff); // Staff 1


staff.setName('LamVu2');


let currentNameStaff = staff.getName();
//tsc  Staff.ts

console.log(currentNameStaff) // Staff 2
// tsc  Staff.ts