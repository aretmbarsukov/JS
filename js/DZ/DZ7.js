// console.log(`===============1==============`)
// const numbers = [1, 2, 3]
// numbers[1] = 10
// console.log(numbers)

// console.log(`===============2==============`);

// const radok = [`pershi`, `drugi`, `treti`]
// radok[3] = `chetverti`
// console.log(radok)

// console.log(`===============3==============`);

// const sum = [1, 2, 3, 4, 5]
// let total = 0;
// for (let i = 0; i < sum.length; i += 1){
//     total += sum[i]
// }
// console.log(`Сума чисел = ${total}`)

// console.log(`===============4==============`);

// const five = [1, 2, 3, 4, 5]
// for (let a = 0; a < five.length; a += 1){
//     console.log(five[a])
//     break
// }

// console.log(`===============5==============`);

// const strings = ["Привіт", "Світ", "JavaScript", "Код", "Рядок"];
// for (let x = 0; x < strings.length; x+=1) {
//   if (strings[x].length >= 5) {
//     console.log(strings[x]);
//   }
// }

// console.log(`===============6==============`);

// const maxNumber = [12, 32, 4, 54, 82, 889, 900, 400, 8, 10]
// let maxNum = maxNumber[0]
// for (let p = 0; p < maxNumber.length; p += 1){
//     if (maxNum < maxNumber[p]) {
//         maxNum = maxNumber[p]
//     }
// }
// console.log(maxNum)

console.log(`===============7==============`);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumber = [];
for (let o = 0; o < numbers.length; o += 1){
  if (numbers[o] % 2 === 0) {
    evenNumber.push(numbers[o])
  }
}
console.log(evenNumber)
