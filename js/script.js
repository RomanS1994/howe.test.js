// // const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// // console.log(technologies);

// /******
//  * 1. створення списку ul
//  * 2. створення циклу для перебору елементів масиву
//  * 3. створення елементів списку li
//  * 4. запис тексту з масиву у елемент li
//  * 5. помістити елементи li у середину елементу ul
//  * 6. помістити ul на сторінку
//  ******/

// const containet = document.getElementById("container");

// const ulElem = document.createElement("ul");

// for (const technology of technologies) {
//   const liElem = document.createElement("li");
//   liElem.textContent = technology;
//   ulElem.appendChild(liElem);
// }
// containet.appendChild(ulElem);

// /**
//   |============================
//   |
//   |============================
// */
// /****** метод map i reduce ******/

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const containet = document.getElementById("container");

// const ulElem = document.createElement("ul");

// const listContent = technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join(` `);

// ulElem.insertAdjacentHTML("beforeend", listContent);

// containet.appendChild(ulElem);

// document.body.addEventListener("keydown", handleKeydown);

// function handleKeydown(events) {
//   console.log(events);
// }

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);

/**
  |============================

  |============================
*/

// const userName = document.querySelector(".js-user-name");
// userName.addEventListener("input", hadlerInput);

// function hadlerInput(evt) {
//   console.log(evt.currentTarget.value);
// }

/**
  |============================
  | подія blur
  |============================
*/

// const userName = document.querySelector(".js-user-name");
// userName.addEventListener("blur", handlerInput);

// function handlerInput(evt) {
//   console.log(evt.currentTarget.value);
// }

/****** подія focus ******/
// const userName = document.querySelector(".js-user-name");
// userName.addEventListener("focus", handlerInput);

// function handlerInput(evt) {
//   console.log(evt.currentTarget.value);
// }

/******  подія submit (якщо знаємо скільки інпутів)  ******/
// const form = document.querySelector(".js-form");

// form.addEventListener("submit", handlerSubmit);

// function handlerSubmit(evt) {
//   evt.preventDefault();

//   /****** деструктуризація елементів за 'name' ******/

//   const { email, password, comment } = evt.currentTarget.elements;

//   const data = {
//     userEmail: email.value,
//     userPassword: password.value,
//     userComment: comment.value,
//   };
// }

/****** подія submit (якщо не знаємо скільки інпутів) ******/
// const form = document.querySelector(".js-form");
// console.dir(form);

// form.addEventListener("submit", handlerSubmit);

// function handlerSubmit(evt) {
//   evt.preventDefault();
//   console.log(evt);
//   const formData = new FormData(evt.currentTarget);
//   console.log(formData);
//   const data = {};

//   formData.forEach((value, key) => (data[key] = value));

//   console.log(data);
// }

/******  подія keydown / keyuo ******/
// document.addEventListener("keydown", handlerKey);
// let list = [];
// function handlerKey(evt) {
//   console.log(evt.code);
//   if (evt.code === "KeyD") {
//     return console.log("😀");
//   }
//   console.log("😱");
// }

/****** приклад свіча ******/
// document.addEventListener("keydown", handlerKey);

// function handlerKey(evt) {
//   switch (evt.code) {
//     case "Escape":
//       closeModal();
//   }

//   function closeModal() {
//     console.log("Modal is close");
//   }
// }

/****** обробка комбінацій клавіш ******/
// document.body.addEventListener("click", handlerClick);
// function handlerClick({ target }) {
//   console.log(target.value);
//   console.log(e.currentTarget);
// }

/****** прототип обєкта ******/

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

/****** прототипне наслідування ******/
// const user = {
//   name: "Alice",
//   age: 23,
//   sayHallo() {
//     console.log(`Hello my name is ${this.name}`);
//   },
//   getAge() {
//     console.log(`My age ${this.age}`);
//   },
// };

// const student = Object.create(user);
// student.name = "Michel";
// student.age = "25";
// student.sayHallo();
// student.getAge();

// const teacher = Object.create(student);
// teacher.name = "Roman";
// teacher.age = 29;
// teacher.sayHallo();
// teacher.getAge();

// console.log(teacher);
/****** повтор прототипа ******/
// const cars = {
//   names: "bmw",
//   years: 2000,
//   namesOfCar() {
//     console.log(`Name of thi car is ${this.names}`);
//   },
//   oldYears() {
//     console.log(`This cars have ${this.years} years`);
//   },
// };

// const audi = Object.create(cars);
// audi.names = "Audi";
// audi.years = "2014";
// audi.namesOfCar();
// audi.oldYears();

/****** Оператор continue ******/
// for (let i = 0; i <= 5; i++) {
//   if (i <= 2) {
//     continue; // Переходить до наступної ітерації, пропускаючи решту тіла циклу для i === 2
//   }
//   console.log(i);
// }

/****** metod bind ******/
// const obj = {
//   x: 10,
//   getX: function () {
//     return this.x;
//   },
// };

// const unboundGetX = obj.getX;
// console.log(unboundGetX()); // undefined, так як контекст не визначений

// const boundGetX = unboundGetX.bind(obj);
// console.log(boundGetX()); // 10, контекст визначений через bind

// const customers = {
//   firstName: "Jacob",
//   lastName: "Marcel",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
//   console.log(`Обробляємо заявку від ${callback()}`);
// }

// makeMessage(customers.getFullName.bind(customers));

/****** metod bind ******/

// const customer = {
//   firstName: "Jacob",
//   lastName: "Marcel",
// };
// function makeMessage(callback) {
//   console.log(`Обробляємо заявку від ${callback}`);
// }

// // makeMessage(customers.getFullName);
// makeMessage(customer.getFullName.bind(customer));

/******  ******/
class Car {
  // Change code below this line
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}
