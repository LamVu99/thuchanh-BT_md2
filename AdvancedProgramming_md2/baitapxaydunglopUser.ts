class User {
    protected _name: string;
    protected _email: string
    public _role: number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }
}
class userManager {
    UserManager: User[] = [];
    constructor() {
    }
    add(User: User): void {
        this.UserManager.push(User);
    }
    getInfo (): User[] {
        return this.UserManager;
    }
    isAdmin(user: User) {
            if (user.role === 1) {
                console.log('admin')
            } else if (user.role === 2) {
                console.log('user')
            }
    }
}
let p1: User = new User('LamVu','dange6801@gmail.com', 1);
let p2: User = new User('LamVu2', 'dange1995@gmail.com', 2);
let users: userManager = new userManager();
users.add(p1)
users.add(p2)
console.log(users.getInfo())
users.isAdmin(p2)
