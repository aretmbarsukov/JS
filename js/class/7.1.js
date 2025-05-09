// const friend = [`Artem`, `nikita`, `nazar`, `anastasia`]
// console.log(friend[3]);
// friend[1] = `mikola`
// console.log(friend)
// friend[4] = `bogdan`
// console.log(friend);
// friend[10] = `Yaroslav`
// console.log(friend);
// console.log(friend[7]);
// console.log(friend.length)
// friend[friend.length] = `mikola`
// console.log(friend)
// console.log(friend.length);
// for (let i = 0; i < friend.length; i += 1) {
//     console.log(friend[i]);
// }
// for (const friends of friend) {
//     console.log(friends)
// }

// const numbers = [1, 5, 8, 2, 10, 63, 89, 34, 67];
// const findElement = 63
// for (const number of numbers) {
//     if (number === findElement) {
//         console.log(`знайшли ${number}`)
//         break
//     }
// }


// const numbers = [1, 5, 8, 2, 10, 63, 89, 34, 67];
// for (const number of numbers) {
//     if (number % 2 === 0) {
//         continue
//     }
//     console.log(number);
// }

// const numbers = [1, 5, 8, 2, 10, 63, 89, 34, 67];
// let sum = 0;
// for (const num of numbers) {
//     if (num % 2 === 0) {
//         continue
//     } sum += 0
// }
// console.log(sum);

// const numbers = [1, -6, 55, 22, -89, 23, 56, 78]
// let sum = 0;
// for (const number of numbers) {
//     if (number < 0) {
//         continue
//     }sum+=number
// }
// console.log(sum);

// const friends = [`Artem`, `Nikita`, `Nazar`, `Anastasia`];
// for (let i = 0; i < friends.length; i += 1){
//     console.log(friends[i]);
//     console.log(i + 1);
//     console.log(`${i + 1} - ${friends[i]}`)
// }

// const tel = [`0938128046`, `0933712080`, `0933034466`, `093444556`]
// for (let i = 0; i < tel.length; i += 1){
//     if (tel[i].length < 10)
//         console.log(tel[i])
//     break
// }

// const number = [3, 45, 867, 34, 90]
// let sum = 0;
// for (let i = 0; i < number.length; i += 1){
//     sum += number[i]
// }
// console.log(sum)

// const number = [3, 45, 867, "345", 34, 90, "334", "890"];
// let sum = 0;
// for (let i = 0; i < number.length; i += 1){
//     sum += Number(number[i])
// }
// console.log(sum)// 2608

// const number = [3, 45, 867, "345", 34, 90, "334", "artem", "890"];
// let sum = 0;
// for (let i = 0; i < number.length; i += 1){
//     if (isNaN(number[i])) {
//         continue
//     }
//     if (typeof (number[i]) === "string") {
//         number[i] = Number(number[i])
//     }
//     sum += number[i]
// }
// console.log(sum)// 2608

// знайти максимальне число
// const number = [3, 45, 867, 34, 90];
// let maxNum = number[0]
// for (let i = 0; i < number.length; i += 1){
//     if (maxNum < number[i]) {
//         maxNum = number[i]
//     }
// }
// console.log(maxNum)

// const number = [3, 45, 867, 34, 90, 10, 20, 30, 40, 50];// результат має бути 7
// let count = 0
// for (let i = 0; i < number.length; i += 1){
//     if (number[i] % 2 !== 0) {
//         count += 1
//     }
// }
// console.log(count)

// const number = [3, 45, 867, 34, 90, 10, 20, 30, 40, 50];
// for (let i = 0; i < number.length; i += 1){
//     if (number >= 50) {
//         console.log(number[i])
//     }
// }

// const arr = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [1, 5, 9],
// ];
// console.log(arr[0][0]);