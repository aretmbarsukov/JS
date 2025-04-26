//for є ключове слово для циклу
//let i = 0 це оголошення локальної змінної і присвоєння її якоїсь локального значення
//i<= 10 умова виходу з циклу
//i+= 1 це поствираз(він виконується для поновлення змінної лічільника)
// for (let i = 1; i <= 10; i += 3){
//     console.log(`Число на поточній ітнрації ${i}`);
// }


// const number = 20;
// for (let i = 0; i <= number; i += 1) {
//   console.log(`Число на поточній ітнрації ${i}`);
// }

//отримати першу та останю літеру в речені
// const messege = "I love JavaScript"
// console.log(messege[0]);
// // console.log(messege[messege.length - 1]);
// for (let i = 0; i < messege.length; i += 1){
//     console.log(`index ${i} значення index ${messege[i]}`)
// }


// let sum = 0
// for (let i = 1; i <= 100; i += 1){
//     sum += i
// }
// console.log(sum)


// const number = 50
// for (let i = 0; i <= number; i += 1){
//     if (i % 2 === 0) {
//         continue
//     }
//     console.log(i)
// }

//припиняє перелік чисел після 25 як в нашому прикладі
// const number = 50;
// for (let i = 0; i <= number; i += 1) {
//     if (i === 25) {
//         break
//     }
//     console.log(i)
// }

//перелічує числя від більшого до меншого
// for (let i = 10; i >= 1; i -= 1){
//     console.log(i);
// }


//робить табличку множення
// for (let i = 1; i <= 10; i += 1){
//     console.log(`5 x ${i} = ${5 * i}`);
// }


//7.Порахуйте кількість голосних у слові
// let word = prompt("Введіть слово")
// let vowels = "аеєиіїоуюяАЕЄИІЇОУЮЯ"
// let count = 0;
// for (let i = 0; i < word.length; i += 1){
//     if (vowels.includes(word[i])) {
//         count += 1
//     }
// }
// console.log(`голосних літер = ${count}`)