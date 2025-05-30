// const str = "Всім привіт";
// console.log(name(str));
// function name(message) {
//   return message.toUpperCase();
// }
// console.log(name("Мене звати Артем"));

// const number = function () {
//     const args = Array.from(arguments)
//     console.log(args)
// }
// console.log(number(1,4,8,7,3))

// const number = function () {
//   console.log(arguments);
// };
// console.log(number(1, 4, 8, 7, 3));

// const number = function (...args) {
// const newArrey = []
//     for (const num of args) {
//         if (typeof(num === "string")) {
//             continue
//         } else {
//             newArrey.push(num * num)
//         }
//     }
//     return newArrey
// };
// console.log(number(1, "привіт", 4, "тест", 8));

//стрілкова функція
// const add = (a, b) => {
//     const result = a + b
//     return result
// }
// console.log(add(5, 8))

// const apperMessage = message => {
//     return message.toUpperCase()
// }
// console.log(apperMessage("jbvkfjdsds"))

// //функція з явним поверненням return
// const add = (a, b) => {
//   return a+b;
// };
// console.log(add(5, 8));

// //функія з не явним поверненням
// const add1 = (a, b) => a + b;
// console.log(add(5, 8));

// const fn = (...args) => {
//     console.log(args)
// }
// console.log(fn(3,6,2,8,34,76))

// const opdj = {
//     name: "nazar",
//     age: 16,
//     friend: ["Nazar", "Mark"]
// }
// const ffff = () => ({})
    


// const calculateEngravingPrice = (message, pricePerWord) => {
//     const words = message.split(" ")
//     // return words.length * pricePerWord
//     return `Кількість слів ${words.length * pricePerWord}`
// }
// console.log(calculateEngravingPrice("hello my name is nikita", 10));


// =======================25.05.2025========================
// const convert = function (a, b) {
//     return a + b
// }
// console.log(convert(32,53))

// const convert = function (a, b, collbak) {//Це функія вищого порядку. Colbak це є функція зворотньлого виклику
//     // console.log(a)
//     // console.log(b)
//     // console.log(collbak);
//     return collbak(a,b)
// };
// const add = function (a, b) {
//     return a + b
// }
// const minus = function (a, b) {
//     return a - b
// }
// const multipliy = function (a, b) {
//     return a * b
// }
// const division = function (a, b) {
//     return a / b
// }
// console.log(convert(23, 24, add))
// console.log("")
// console.log(convert(86,134,minus))


//Напишіть функію яка повертає новий масив в якому всі елементи масиву помножені на задане число з використанням колбек-функція.
// const convert = function (array, num, calback) {
//     const newArray = []
//     for (let i = 0; i < array.length; i += 1){
//         newArray.push(calback(array[i],num))
//     }
//     return newArray
// }
// const elemenst = (vellue, factor) => vellue * factor
// const elemenstDilena = (vellue, factor) => vellue / factor;
// const arr = [34, 67, 12, 89, 34]
// const num = 45
// const num2 = 2
// console.log(convert(arr, num, elemenst))
// console.log(convert(arr, num2, elemenstDilena));

//Знайдіть суму елементів масиву з використанням колбек-функції
// const arr = [1, 2, 3, 4, 5]

// function sumArray(arr, calback) {
//     console.log(arr)
//     return calback(arr)
// }
// const cb = function (veule) {
//     let sum = 0
//     for (let i = 0; i < veule.length; i += 1){
//         sum += veule[i]
//     }
//     return sum
// }

// console.log(sumArray(arr, cb))

// const fren = ["Artem", "Slava", "Egor", "Vetaliy"]
// // console.log(fren[0])
// for (let i = 0; i < fren.length; i += 1){
//     console.log(i)
//     console.log(fren[i])
// }


// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки

const processArray = (array, callback) => {
    return callback(arrray)
}
const sum = array => {
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}
const min = array => {
    return
}
const max = array => {
    return
}
const arr = [1, 5, 3, 8, 45]
console.log(processArray(arr, sum))
console.log(processArray(arr, min))
console.log(processArray(arr, max))