"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
// A Useful TypeScript Shortcut & Compiling to javascript.
class User2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const max = new User2("Max", 36);
const fred = new User2("Fred", 40);
console.log(max, fred);
//  Making sense of public and private
class User3 {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const max2 = new User3("Max", 36);
const fred2 = new User3("Fred", 40);
console.log(max2, fred2);
// Making field as "Readonly"
class User4 {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const max3 = new User4("Max", 36);
const fred3 = new User4("Fred", 40);
console.log(max3, fred3);
//  Understanding getters
class User5 {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + "" + this.lastName;
    }
}
;
const max4 = new User5("max", "Schwarzmuller");
console.log(max4.fullName);
// Setting values with Setters
class User6 {
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        ;
        this._firstName = name;
    }
    ;
    set lastName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        this._lastName = name;
    }
    ;
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
}
;
const max5 = new User6();
max5.firstName = "Max";
max5.lastName = "";
console.log(max5.fullName);
//# sourceMappingURL=basics.js.map