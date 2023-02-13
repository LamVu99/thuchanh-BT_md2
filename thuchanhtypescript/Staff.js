var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var staff = new Staff('LamVu', 'dange6801@gmail.com', 23);
var nameStaff = staff.getName();
console.log(nameStaff); // Staff 1
staff.setName('LamVu2');
var currentNameStaff = staff.getName();
//tsc  Staff.ts
console.log(currentNameStaff); // Staff 2
// tsc  Staff.ts
