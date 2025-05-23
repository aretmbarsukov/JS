//Оголошення функції function declaration
// function showMassege(message) {//Message - це є параметри фунції які вона очікує при виклику функції
//     const uperMessage = message.toUpperCase()
//     return uperMessage
// }




//Виклик функії
// console.log(showMassege("топ ти лох"))
// console.log(showMassege("БоБер"))//У пузвтій душці при виклику функії передаємо аргумент
// const str =
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quam accusantium sit veniam voluptas a, iure dolore assumenda quidem asperiores, culpa, labore similique perferendis vitae cumque cum. Maxime, alias cumque!";
// console.log(showMassege(str))
// const result = showMassege(str)
// console.log(result)


//function exspretion - функціональний вираз
// const sumNamber = function (num1, num2) {
//     return num1 + num2
// }
// console.log(sumNamber(2, 2))
// console.log(sumNamber(8, 5))


//Стрілкова Функція
// const multiplication = (num1, num2) => {
//     const result = num1 * num2
//     return result
// }
// console.log(multiplication(3,8))

// const multiplication = (num1, num2) => {
//   return num1 * num2;
// };
// console.log(multiplication(4, 8));

// const multiplication = (num1, num2) => num1 * num2;
// console.log(multiplication(4, 3));


// function minusNumbe(a = 0, b = 0) {
//     return a - b
// }
// console.log(minusNumbe(16, 5))


// const definition = function (a, b) {
//     return a / b
// }
// console.log(definition(20, 2))


// const name = "Artem"
// console.log(name)


//==============18.05.2025===============
//псевдо масив аргумент

//перетворення псевдо масив аргумент на звичайний масив
// const func = function () {
//     // console.log(arguments)//псевдо масив аргументів
//     const args = Array.from(arguments)//перетворення псевдо масива на звичайний масив
//     console.log(args)
// }
// console.log(func(1,35,3,8,9))

//сучасний спосіб отимати масив аргумент
// const func = function (...args) { //... - операція рест
//     console.log(args)
// };
// console.log(func(1, 35, 3, 8, 9));

// const aaa = function (a, b) {
//     const res = a + b
//     return res
// }
// const bbb = function (a, b) {
//     const res = a - b;
//     return res;
// }

//Напиши функію яка повертає середнє значення з масиву числа:
// const func = function (arr) {
//     // console.log(arr)
//     let sum = 0
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum / arr.length
// }
// console.log(func([4,8,6,4,23,54,4,1]))

// Напиши функцію яка повертає буль як результат перевірки числа на парність:
// const isEven = function (a) {
//     return a % 2 === 0
// }
// console.log(isEven(4)); // true
// console.log(isEven(3)); // false

// const isEven = a => !a % 2 === 0
// console.log(isEven(4)); // true
// console.log(isEven(3)); // false


// Напиши функцію яка повертає найбільше число в масиві:
// const array = [1, 8, 2, 5, 4];
// const max = function (array) {
//     let bigNumber = array[0]
//     for (let i = 0; i < array.length; i += 1){
//         if (array[i] > bigNumber) {
//             bigNumber = array[i]
//         }
//     }
//     return bigNumber
// }
// console.log(max(array)); // 5

// console.log(max([123, 456, 12345, 678]))

// const newArray = [34, 2345, 874, 8533]
// console.log(max(newArray))
// У цій функції ми проходимо по масиву чисел та знаходимо найбільше число.Його повертаємо як результат функції.

//Напиши функцію яка повертає факторіал числа
// const fakt = function (num) {
//     let sum = 1
//     for (let i = 1; i <= num; i += 1){
//         console.log(i)
//         sum *= i
//     }
//     return sum
// }
// console.log(fakt(5))


// Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// My average score: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:
// const myAverageScore = function (array) {
//     let sum = 0
//     let message = ""
    
//     for (let i = 0; i < array.length; i += 1){
//         sum += array[i] / array.length
//     }
//     if (sum >= 91) {
//         message = `Ваша сердня оцінка  ${sum}, ви в категорії А`
//     }else if (sum > 81 && sum <= 90) {
//         message = `Ваша сердня оцінка  ${sum}, ви в категорії B`
//     }else if (sum > 71 && sum <= 80) {
//         message = `Ваша сердня оцінка  ${sum}, ви в категорії C`
//     }else if (sum > 61 && sum <= 70) {
//         message = `Ваша сердня оцінка  ${sum}, ви в категорії D`
//     }
//     return message
// }
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));
// console.log(myAverageScore([60, 80, 80, 96]));
