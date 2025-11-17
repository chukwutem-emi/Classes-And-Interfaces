// What are Interfaces?

// Object type definitions & contracts that can be implemented by classes

interface Authenticatable {
    email: string;
    password: string;

    login() : void;
    logout() : void;
}
// Extending Interfaces

interface AuthenticatableAdmin extends Authenticatable {
    role: "admin" | "superAdmin"
}

// implementing interface

class AuthenticatableUser implements Authenticatable {
    constructor(public email: string, public password: string) {}
    login() {
        
    }
    logout() {
        
    }
}

// Ensuring Base Types with Interfaces
function authenticate(user:Authenticatable) {
}
let user: Authenticatable;

user = {
    email: "test@example.com",
    password:"abcd1",
    login() {
        // reach out to a database, check credentials, create a session
    },
    logout() {
        // clear the session
    }
}