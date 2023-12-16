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

// // const containet = document.getElementById("container");

// // const ulElem = document.createElement("ul");

// // for (const technology of technologies) {
// //   const liElem = document.createElement("li");
// //   liElem.textContent = technology;
// //   ulElem.appendChild(liElem);
// // }
// // containet.appendChild(ulElem);

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

/**
  |============================
  | подія focus
  |============================
*/

// const userName = document.querySelector(".js-user-name");
// userName.addEventListener("focus", handlerInput);

// function handlerInput(evt) {
//   console.log(evt.currentTarget.value);
// }

/**
  |============================
  | подія submit (якщо знаємо скільки інпутів)
  |============================
*/

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

/**
  |============================
  | подія submit (якщо не знаємо скільки інпутів)
  |============================
*/

// const form = document.querySelector(".js-form");

// form.addEventListener("submit", handlerSubmit);

// function handlerSubmit(evt) {
//   evt.preventDefault();

//   const formData = new FormData(evt.currentTarget);
//   console.log(formData);
//   const data = {};

//   formData.forEach((value, key) => (data[key] = value));

//   console.log(data);
// }

/**
  |============================
  | подія keydown / keyuo ******
  |============================
*/

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

/**
  |============================
  | обробка комбінацій клавіш
  |============================
*/
