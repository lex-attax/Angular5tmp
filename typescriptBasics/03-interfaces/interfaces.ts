interface User {
    username: string
    password: string
    confirmPassword?: string // Optional property -> Does not have to be implemented
}

let user: User

// This value doesnot satisfy the interface -> Compilation error
// user = { anything: 'anything', anynumber: 5}

// This value does satisfy the interface
user = { username: 'max', password: 'supersecret' }

// Interfaces also contain functions (without the function body)

interface CanDrive {
    accelerate(speed: number): void
}

let car: CanDrive = {
    accelerate: function (speed: number) {
        // ...
    }
}