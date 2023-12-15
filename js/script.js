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
