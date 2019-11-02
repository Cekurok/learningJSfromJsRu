'use strict';

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Вася");
let userKolan = new User("Коляша");

alert(user.name); // Вася
alert(user.isAdmin); // false
alert(userKolan.name); // Вася
alert(userKolan.isAdmin); // false