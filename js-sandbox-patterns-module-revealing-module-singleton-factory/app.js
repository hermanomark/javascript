// 093 Module & Revealing Module Pattern

// Basic Structure

// (function(){
//     // Declare private vars and functions
   
//     return {
//         // Declare public var and functions
//     }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//     let text = 'Hello World';

//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function() {
//             changeText();
//             // console.log(text);
//         }
//     }
// })();

// // Can call functions from public
// UICtrl.callChangeText();
// // Cannot call functions from private
// // UICtrl.changeText();
// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
// const ItemCtrl = (function(){
//     let data = [];

//     function add(item) {
//         data.push(item);
//         console.log('Item Added...');
//     }

//     function get(id) {
//         return data.find(item => {
//             return item.id === id;
//         });
//     }

//     return {
//         add: add,
//         get: get
//     }
// })();

// ItemCtrl.add({id: 1, name: 'John'});
// ItemCtrl.add({id: 2, name: 'Mark'});
// console.log(ItemCtrl.get(2));

// -----------------------------------------------------------------
// 094 Singleton Pattern

// const Singleton = (function() {
//     let instance;

//     function createInstance() {
//         const object = new Object({name: 'Brad'});
//         return object;
//     }

//     return {
//         getInstance: function() {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();

// console.log(instanceA === instanceB);
// console.log(instanceA);

// -----------------------------------------------------------------
// 095 Factory Pattern

// function MemberFactory() {
//     this.createMember = function(name, type) {
//         let member;

//         if (type === 'simple') {
//             member = new SimpleMembership(name);
//         } else if (type === 'standard') {
//             member = new StandardMembership(name);
//         } else if (type === 'super') {
//             member = new SuperMembership(name);
//         }

//         member.type = type;

//         member.define = function() {
//             console.log(`${this.name} (${this.type}): ${this.cost}`);
//         }

//         return member;
//     }
// }

// const SimpleMembership = function(name) {
//     this.name = name;
//     this.cost = '$5';
// }

// const StandardMembership = function(name) {
//     this.name = name;
//     this.cost = '$15';
// }

// const SuperMembership = function(name) {
//     this.name = name;
//     this.cost = '$25';
// }

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember('John Doe', 'simple'));
// members.push(factory.createMember('Chris Jackson', 'super'));
// members.push(factory.createMember('Janice Williams', 'simple'));
// members.push(factory.createMember('Tim Smith', 'standard'));

// // console.log(members);

// members.forEach(function(member) {
//     member.define();
// });

