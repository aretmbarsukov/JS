//Масив.метод((улюмасиву, індексб сам масив) => {})
//Масив.reduce((acc, item)c => {},0)

// const numbers = [2, 5, 8, 50, 22, 11, 39]
// const result = numbers.reduce((acc, num) => acc + num, 0)
// console.log(result)

// const numbers = [2, 5, 8, 50, 22, 11, 39];
// const result = numbers.reduce((acc, num) => {
//     return acc + num
// }, 0);
// console.log(result);

// let acc = 0
// for (const item of numbers) {
//     acc += item
// }
// console.log(acc)


// const people = [
//   {
//     name: "Олена",
//     age: 25,
//     city: "Київ",
//     email: "olena@example.com",
//     isActive: true,
//     points: 120,
//     friends: ["Іван", "Марія"],
//   },
//   {
//     name: "Іван",
//     age: 32,
//     city: "Львів",
//     email: "ivan@example.com",
//     isActive: false,
//     points: 90,
//     friends: ["Олена", "Петро"],
//   },
//   {
//     name: "Марія",
//     age: 28,
//     city: "Одеса",
//     email: "maria@example.com",
//     isActive: true,
//     points: 135,
//     friends: ["Олена", "Анна"],
//   },
//   {
//     name: "Петро",
//     age: 40,
//     city: "Харків",
//     email: "petro@example.com",
//     isActive: false,
//     points: 75,
//     friends: ["Іван", "Дмитро"],
//   },
//   {
//     name: "Анна",
//     age: 22,
//     city: "Дніпро",
//     email: "anna@example.com",
//     isActive: true,
//     points: 140,
//     friends: ["Марія", "Олег"],
//   },
//   {
//     name: "Дмитро",
//     age: 35,
//     city: "Чернівці",
//     email: "dmytro@example.com",
//     isActive: true,
//     points: 110,
//     friends: ["Петро", "Сергій"],
//   },
//   {
//     name: "Наталя",
//     age: 30,
//     city: "Полтава",
//     email: "natalia@example.com",
//     isActive: false,
//     points: 95,
//     friends: ["Катерина", "Іван"],
//   },
//   {
//     name: "Олег",
//     age: 27,
//     city: "Вінниця",
//     email: "oleh@example.com",
//     isActive: true,
//     points: 130,
//     friends: ["Анна", "Сергій"],
//   },
//   {
//     name: "Катерина",
//     age: 29,
//     city: "Запоріжжя",
//     email: "kateryna@example.com",
//     isActive: false,
//     points: 85,
//     friends: ["Наталя", "Дмитро"],
//   },
//   {
//     name: "Сергій",
//     age: 31,
//     city: "Тернопіль",
//     email: "serhiy@example.com",
//     isActive: true,
//     points: 100,
//     friends: ["Олег", "Дмитро"],
//   },
// ];

//суммує всі бали
// const allPoints = people.reduce((acc, user) => acc + user.points, 0)
// console.log(allPoints)

// const friends = people.flatMap(user => user.friends)
// console.log(friends)

// const friendsReduce = people.reduce((acc, user) => {
//     acc.push(...user.friends)
//     return acc
// }, [])
// console.log(friendsReduce)

// const unicFriends = friendsReduce.filter((item, idx, arr) => arr.indexOf(item) === idx)
// console.log(unicFriends)

// const unicOther = friendsReduce.reduce((acc, item) => {
//     if (acc[item]) {
//         acc[item] += 1
//     } else {
//         acc[item] = 1
//     }
//     return acc
// }, {})
// console.log(unicOther)

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// }
// const res = Object.values(salary).reduce((acc, item) => acc + item, 0)
// console.log(res)

// const cart = [
//   { label: `Apples`, price: 100, quantity: 2 },
//   { label: `Bananas`, price: 120, quantity: 3 },
//   { label: `Lemons`, price: 70, quantity: 4 },
// ];
// const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
// console.log(totalPrice)

// Зробити статистику всіх тегів. Назву тега потрібно зробити ключем, значення якого буде кількістьповторень тегів в масиві. Якщо властивість з ключем tag є, збільшуємо його значення на 1 якщо властивості немає с таким ключем що в tag, створити і записати 1

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// let stats = {}
// const tagStats = tweets.flatMap(item => item.tags)
// const stat = tagStats.reduce((acc, item) => {
//     // if (acc[item]) {
//     //     acc[item] += 1
//     // } else {
//     //     acc[item] = 1
//     // }
//     // return acc
    
//     acc[item] = (acc[item] || 0) + 1
//     return acc
// }, [])
// console.log(stat)

const people = [
  {
    name: "Олена",
    age: 25,
    city: "Київ",
    email: "olena@example.com",
    isActive: true,
    points: 120,
    friends: ["Іван", "Марія"],
  },
  {
    name: "Іван",
    age: 32,
    city: "Львів",
    email: "ivan@example.com",
    isActive: false,
    points: 90,
    friends: ["Олена", "Петро"],
  },
  {
    name: "Марія",
    age: 28,
    city: "Одеса",
    email: "maria@example.com",
    isActive: true,
    points: 135,
    friends: ["Олена", "Анна"],
  },
  {
    name: "Петро",
    age: 40,
    city: "Харків",
    email: "petro@example.com",
    isActive: false,
    points: 75,
    friends: ["Іван", "Дмитро"],
  },
  {
    name: "Анна",
    age: 22,
    city: "Дніпро",
    email: "anna@example.com",
    isActive: true,
    points: 140,
    friends: ["Марія", "Олег"],
  },
  {
    name: "Дмитро",
    age: 35,
    city: "Чернівці",
    email: "dmytro@example.com",
    isActive: true,
    points: 110,
    friends: ["Петро", "Сергій"],
  },
  {
    name: "Наталя",
    age: 30,
    city: "Полтава",
    email: "natalia@example.com",
    isActive: false,
    points: 95,
    friends: ["Катерина", "Іван"],
  },
  {
    name: "Олег",
    age: 27,
    city: "Вінниця",
    email: "oleh@example.com",
    isActive: true,
    points: 130,
    friends: ["Анна", "Сергій"],
  },
  {
    name: "Катерина",
    age: 40,
    city: "Запоріжжя",
    email: "kateryna@example.com",
    isActive: false,
    points: 100,
    friends: ["Наталя", "Дмитро"],
  },
  {
    name: "Сергій",
    age: 31,
    city: "Тернопіль",
    email: "serhiy@example.com",
    isActive: true,
    points: 100,
    friends: ["Олег", "Дмитро"],
  },
];

// const copyPeople = [...people].sort((a, b) => b.isActive - a.isActive)
// console.log(copyPeople)
// const copyPeople = [...people].sort((a, b) => a.points - b.points)
// console.log(copyPeople)
// const copyPeople = [...people].sort((a, b) => {
//   if (a.points === b.points) {
//     return b.gae - a.age
//   } else {
//     return a.points - b.points
//   }
// })
// .map((item) => item.name)
// console.log(copyPeople);

const filteredName = people
