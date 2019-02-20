// Constructors the this Keyword

// // Person constructor
// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// // const brad = new Person('Brad', 36);
// // const john = new Person('John', 30);

// // console.log(john.age);

// const brad = new Person('Brad', '9-10-1995');
// console.log(brad.calculateAge());

// ---------------------------------------------------------------
// Built In Constructors

// // String
// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// // name2.foo = 'bar';
// // console.log(name2);

// console.log(typeof name2);

// if(name2 === 'Jeff') {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(typeof num2);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(typeof bool2);

// // Function
// const getSum1 = function(x,y) {
//   return x + y;
// }

// const getSum2 = new Function('x','y', 'return 1 + 1');

// console.log(getSum2(1,1));

// // Object
// const john1 = {name: "John"};
// const john2 = new Object({name: "John"});

// console.log(john1);

// // Arrays
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// console.log(arr1);

// // Regular Expressions
// const re1 = /\w+/;
// // When you're doing RegExp you must put double backslash to get the same result for primitve regular expression
// const re2 = new RegExp('\\w+');

// console.log(re2);

// ---------------------------------------------------------------
// Prototypes Explained

// // Object.prototype
// // Person.prototype

// // Person constructor
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
// //     instead of putting function in the object you can put it on prototype
// //     this.calculateAge = function() {
// //         const diff = Date.now() - this.birthday.getTime();
// //         const ageDate = new Date(diff);
// //         return Math.abs(ageDate.getUTCFullYear() - 1970);
// //   }
// }

// // Calculate age
// Person.prototype.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get full name
// Person.prototype.getFullname = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // Gets Married
// Person.prototype.getsMarried = function(newLastName) {
//     this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);

// console.log(john.calculateAge());

// console.log(mary.getFullname());

// mary.getsMarried('Smith');

// console.log(mary.getFullname());

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

// ---------------------------------------------------------------
// Prototypal Inheritance Prototypal Inheritance

// // Person constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Create a customer
// const customer1 = new Customer('Tom', 'Smith', '555-555', 'Standard');

// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }

// console.log(customer1.greeting());

// ---------------------------------------------------------------
// Using Object.create

// const personPrototypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototypes);

// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson');

// console.log(mary.greeting());

// // Alternative way of doing Object.create
// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'Brad'},
//     lastName: {value: 'Traversy'},
//     age: {value: 36}
// });

// console.log(brad);

// console.log(brad.greeting());

// ---------------------------------------------------------------
// ES6 Classes

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }

//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName) {
//         this.lastName = newLastName;
//     }

//     // if you want to use a stand alone method in your class, you could use static
//     static addNumbers(x, y) {
//         return x + y;
//     }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');

// mary.getsMarried('Smith')

// console.log(mary);

// how to use static method
// console.log(Person.addNumbers(1,2));


// ---------------------------------------------------------------
// Sub Classes

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '555-555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());