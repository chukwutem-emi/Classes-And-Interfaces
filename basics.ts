class User {
    name: string;
    age: number;
    constructor(n:string, a:number) {
        this.name = n;
        this.age = a;
    }
}

// A Useful TypeScript Shortcut & Compiling to javascript.

class User2 {
    constructor(public name:string, public age:number) {
    }
}

const max = new User2("Max", 36);
const fred = new User2("Fred", 40);

console.log(max, fred);

//  Making sense of public and private

class User3 {
    public hobbies:string[] = []
    constructor(public name:string, private age:number) {
    }
}

const max2 = new User3("Max", 36);
const fred2 = new User3("Fred", 40);


console.log(max2, fred2);

// Making field as "Readonly"

class User4 {
    readonly hobbies:string[] = []
    constructor(public name:string, readonly age:number) {
    }
}

const max3 = new User4("Max", 36);
const fred3 = new User4("Fred", 40);


console.log(max3, fred3);

//  Understanding getters

class User5 {
    constructor( private firstName:string, private lastName:string) {
    }
    get fullName() {
        return this.firstName + "" + this.lastName;
    }
};
const max4 = new User5("max", "Schwarzmuller");

console.log(max4.fullName);

// Setting values with Setters

class User6 {
    // protected modifier (it give an extended access for you to access a property outside a CLASS)
    protected _firstName: string = "";
    private _lastName: string = "";

    set firstName(name:string) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        };
        this._firstName = name;
    };
    set lastName(name:string) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        this._lastName = name;
    };
    get fullName() {
        return this._firstName + " " + this._lastName
    }
    // Exploring Static Properties And Methods
    static eid = "USER";

    static greet() {
        console.log("Hello!");
    }
};
console.log(User6)
User6.greet();

const max5 = new User6();
max5.firstName = "Max";
max5.lastName = "";
console.log(max5.fullName);

// Understanding Inheritance

class Employee extends User6 {
    constructor(public jobTitle: string) {
        super();
    }
    work() {
        //...
        console.log(this._firstName)
    }
}

// Abstract class

abstract class UIElement {
    constructor(public identifier:string) {}

    clone() {
        // logic to duplicate the UI element

    }
    // let uiElement = new UIElement();

}
class SideDrawerElement extends UIElement {
    constructor(public identifier: string, public position:"left" | "right") {
        super(identifier)
    }
}





