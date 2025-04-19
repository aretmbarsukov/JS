// let name = `bogdan` //голобальна область видимості
// if (true) {
//     let name = `anastasia`//блокова область видимості
//     console.log(name)
// }
// console.log(name)


// let name = `bogdan`; //голобальна область видимості
// if (true) {
//     name = `anastasia`; //блокова область видимості
//     console.log(name);
//     let age = 18
// }
// console.log(age);


// let number = 20
// if (true) {
//    let number = 100
//     if (true) {
//         number = 140
//         console.log(number)
//     }
// }
// console.log(number)


// створіть зміну cost не призначая їй нічого
// створіть зміну subscription і призначте їй рядок premium
// перевірте, якщо subscription дорівнює рго, призначте зміній cost значення
//О, якщо subscription дорівнює free призначте зміній cost значення 100, якщо subscription дорівнює premium призначте зміній cost значення 500
// якщо не дорівнює виведіть у консоль invalid subscription type
// виведіть у консоль значення cost

// let cost = 0
// const subscription = prompt("Оберіть ваш рівень").trim().toLowerCase()
// if (subscription === "pro") {
//     cost = 0
// } if (subscription === "free") {
//     cost = 100
// } else if (subscription === "premium") {
//     cost = 500
// } else {
//     console.log("invalid subscription type");
// }
// console.log(cost)


//Напишіть код що отримує число з input тас
// якщо число більше 1 виведіть повідомлення число більше 1 та виведіть число через шаблоний рядок на екран, якщо менше то виведіть повідомлення число менше 1 та виведіть число через шаблоний рядок на екран.

// let number = 0
// const userName = Number(prompt("Введіть будь яке число"))
// if (userName > 0) {
//     number = userName
//     console.log(`Число ${number} є плюсовим`);
// } else if (userName < 0) {
//     number = userName
//     console.log(`Число ${number} є мінусовим`);
// } else if (userName === 0) {
//     console.log(`Число ${number}`);
// } else {
//     console.log("не число")
// }


// Напиши скрипт вибору готеля по кількості зірок.
// 1-20$, 2-30$, 3-50$, 4-70$, 5-120$
// Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
// "Токої кількості зірок немає

// let sum = ""
// const stars = Number(prompt("Введіть кількість зірочок"))
// if (stars === 1) {
//   sum = `Вартість вашого номеру 20$`;
// } else if (stars === 2) {
//   sum = `Вартість вашого номеру 30$`;
// } else if (stars === 3) {
//   sum = `Вартість вашого номеру 50$`;
// } else if (stars === 4) {
//   sum = `Вартість вашого номеру 70$`;
// } else if (stars === 5) {
//   sum = `Вартість вашого номеру 120$`;
// } else {
//     console.log("Токої кількості зірок немає");
// }
// console.log(sum)
