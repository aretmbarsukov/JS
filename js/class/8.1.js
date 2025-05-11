// const message ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus odit, autem blanditiis omnis provident nobis ex expedita natus corrupti alias nesciunt consequuntur labore hic dignissimos fugit praesentium minima quae.";
// const astrey = message.split(".")
// console.log(astrey)

// const friend = ["Nazar", "Yaroslav", "Artem", "Bogdan"]
// const stringFriend = friend.join(",")
// console.log(stringFriend);


//Робимо slug з назви статті з URL адреси,
// Заголовок статті складається тільки з букв та пропусків,
// Нормалізуємо рядок,
// Розбиваємо по словах,
// Записуемо в рядок з роздільником,
// Чейнінг
// повинно получитися top-10-benefits-of-react-fremework
// const title = "Top 10 Benefits Of React Fremework".

// const title = "Top 10 Benefits Of React Fremwork"
// let workTitle = title.split(" ").join("-").toLocaleLowerCase()
// const workString = workTitle.join("-")
// const lowerStr = workString.toLocaleLowerCase()
// console.log(workTitle)

// повертає індекс першого знайденого елемента
// const friend = ["Nazar", "Yaroslav", "Artem", "Bogdan", "Artem"];
// const findIndexFriends = friend.indexOf("Artem")
// console.log(findIndexFriends);


//повертає true або false в випадку є бао немає елемента в масиві
// const friend = ["Nazar", "Yaroslav", "Artem", "Bogdan", "Artem"];
// const findIncludFriends = friend.includes("Artem")
// console.log(findIncludFriends)


// const friend = ["Nazar", "Yaroslav", "Artem", "Bogdan", "Artem"];
// //додаєх в кінець
// friend.push("Anastasiia")
// friend.push("Nikita", "Yaroslav")
// //додає на початок
// friend.unshift("Mykola")
// //видаляє перший елемент
// const delFirstFriend = friend.shift()
// const del = friend.shift()
// //видаляє останій елемент
// const delLastFriend = friend.pop()
// const delFriend = friend.pop();
// // console.log(del);
// // console.log(delFirstFriend)
// console.log(friend)


// ============11.05.2025=============

// const number = [1, 2, 3, 4, 5, 7, 9, 11, 8]
// const copyNumber = number.slice()
// console.log(copyNumber)
// console.log(copyNumber === number)
// const newNumber = number
// console.log(newNumber === number)
// console.log(number)

// const number = [1, 2, 3, 4, 5, 7, 9, 11, 8];
// //видалення елемента, перший аргумент починаючи з якого індекса, другий аргумент це по який індекс ми хочимо видалити але не включно
// number.push(56,200)
// const newArr = number.splice(3, number.length - 1)
// console.log(newArr)
// console.log(number)

// const number = [1, 2, 3, 4, 5, 7, 9, 11, 8];
// number.splice(5, 0, 100, 20, 30, 500, 800)//додавання елементів без заміни
// console.log(number)

// const number = [1, 2, 3, 4, 5, 7, 9, 11, 8];
// number.splice(6, 2, 900);//заміна чисел або числа(перше з якого індексу,друге скільки елементів,третє чим замінити)
// number.splice(0,1,1000)
// console.log(number);
// const updateIndex = 4;
// const newVelu = 400;
// number.splice(updateIndex, 1, newVelu)
// console.log(number)


// const number = [10, 2, 3, 4, 5, 7, 9, 11, 8];
// const number2 = [5, 23, 987, 13, 987, 23, 1]
// const number3 = [24, 567, 23, 98, 65, 234, 7]
// let sum = 0
// for (let i = 0; i < number.length; i += 1){
//     sum += number[i]
// }
// for (let i = 0; i < number2.length; i += 1) {
//   sum += number2[i];
// }
// for (let i = 0; i < number3.length; i += 1) {
//   sum += number3[i];
// }

// const number4 = number.concat(number3, number2)
// console.log(number4)
// for (let i = 0; i < number4.length; i += 1){
//     sum += number4[i]
// }
// console.log(sum)

// const number5 = [...number, ...number2, ...number3]
// console.log(number5)
// let min = number5[0]
// for (let i = 0; i < number5.length; i += 1){
//     if (number5[i] < min) {
//         min = number5[i]
//     }
// }
// console.log(min)

// const result = Math.max(...number5)
// console.log(result)