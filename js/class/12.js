// const a = 5
// let b = a
// console.log(a)
// b = 10
// console.log(b === a)
// console.log(b)
// console.log(a);

// const obja = {
//     x: 1,
//     y: 2,
//     z: 3,
// }
// const objb = obja
// console.log(obja, objb)
// console.log(obja === objb)

// objb.x = 1000;
// console.log(obja, objb);
// objb.d = 2000;
// console.log(obja, objb);
// const f = {}
// const h = {}
// console.log(f === h)


// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// num.push(23444)
// // num.hellow = "world" //нерпавельно
// console.log(num)


// const obja = {
//     x: 1,
//     y: 2,
//     z: 3,
// }

// const objc = {
//     x: 1000,
//     f: 6,
//     g: 7,
// }

// const objd = {
//     k: 8,
//     g: 7000,
//     i: 9,
// }

// const objb = {
//     ...obja,
//     ...objc,
//     n: 12,
//     ...objd,
//     s: 34,
//     u: 89,
//     x: 1000000,
// }
// objb.d = 100
// console.log(obja)
// console.log(objb)
// console.log(objc);
// console.log(objd);
// console.log(obja === objb)

// const a = [23, 45, 87, 1000, 56, 10, 67]
// const result = Math.min(...a)
// console.log(result)

// const fruits = ["bunan", "apple", "orange", "ananas"]
// function showFruits(a, b, c, d) {
//     return `В корзині лежать такі фрукти ${a}, ${b}, ${c}, ${d}, `;
// }
// console.log(showFruits(...fruits))


//Створиту функцію яка по імені знайде і добавить до points 10%
// const friends = [
//   { name: "Mango", online: false, points: 10 },
//   { name: "Kiwi", online: true, points: 15 },
//   { name: "Poly", online: false, points: 140 },
//   { name: "Ajax", online: false, points: 102 },
// ];
// console.log("Оригінал:", friends);

// function addPoints(arr, name) {
//   const newArr = [];

//   for (const items of arr) {
//     let copy = { ...items };
//     if (copy.name === name) {
//       copy.points *= 1.1;
//     }
//     newArr.push(copy);
//   }

//   return newArr; // повертаємо новий масив
// }

// const updatedFriends = addPoints(friends, "Ajax");
// console.log("Оновлений:", updatedFriends);


