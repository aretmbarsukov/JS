// if (5 > 2) {
//     console.log("зайшли в тіло if")
// } else {
//     console.log("block else");
// }

// let age;
// const userAge = Number(prompt("Скільки вам років?"))
// if (userAge >= 18 ||userAge === 18) {
//     age = "Більше вісімнадцяти"
// } else {
//     age = "Менше вісімнадцяти"
// }
// console.log(age);


// let age;
// const userAge = Number(prompt("Скільки вам років?"));
// if (userAge >= 18 ||userAge === 18) {
//     console.log("Більше 18");
// } else if (userAge === 18) {
//     console.log("Дорівнює 18")
// } else {
//     console.log("Менше 18");
// }


//Якщо з 0-20 юний з 20-40 молодий з 40-60 дорослий >60 старий
// let age = "";
// const userAge = Number(prompt("Введіть ваш вік"))
// if (userAge < 20) {
//     age = "Юний"
// } else if (userAge >= 20 && userAge < 40) {
//     age = "Молодий"
// } else if (userAge >= 40 && userAge < 60) {
//     age = "Дорослий"
// } else if (isNaN(userAge)) {
//     console.log("Не вірні данні")
// } else {
//     age = "Старий"
// }
// console.log(age)


//найбільщого числа
//створіть зміну num1 і призначте їй 5
//створіть зміну num2 і призначте їй 10
//перевірте яке з цих чисел більше і призначте зміній bigNumber num1 або num2
// const num1 = 5;
// const num2 = 10;
// let bigNumber;
// if (num1 > num2) {
//     bigNumber = num1
// } else {
//     bigNumber = num2;
// }
// console.log(bigNumber)

//тернарний оператор
// const num1 = 5;
// const num2 = 10;
// const bigNumber = (num1 > num2) ?`БІЛЬШЕ ЧИСЛО ${num1}`: `МЕНШЕ ЧИСЛО ${num2}`;
//                   //умова        true                        false
//                   //умова? true : false;
// console.log(bigNumber)



// створіть зміну cost не призначая їй нічого
// створіть зміну subscription і призначте їй рядок premium
// перевірте, якщо subscription дорівнює рго, призначте зміній cost значення
//О, якщо subscription дорівнює free призначте зміній cost значення 100, якщо subscription дорівнює premium призначте зміній cost значення 500
// якщо не дорівнює виведіть у консоль invalid subscription type
// виведіть у консоль значення cost
// let cost;
// const subscription = "premium";
// if (subscription === "pro") {
//     cost = 0
// } else if (subscription === "free") {
//     cost = 100
// } else if (subscription === "premium") {
//     cost = 500
// } else {
//     console.log("invalid subscription type");
// }
// console.log(cost);



// const messege =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, assumenda mollitia dolorum iusto possimus, dignissimos suscipit, facilis amet reiciendis veniam qui.Fuga qui optio debitis dignissimos necessitatibus voluptatum sequi quae.";
// if (messege.includes("dolorum") && messege.includes("Fuga")) {
//     console.log("threre is 2 words!");
// } else if (messege.includes("dolorum") || messege.includes("Fuga")) {
//     console.log("i had found only 1 word");
// } else {
//     console.log("no words found");
// }