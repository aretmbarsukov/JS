const people = [
  {
    name: "Артем",
    age: 16,
    city: "Vinnitsa",
    email: "karasbobra@gmail.com",
    isActive: true,
    points: 100,
    friends: ["Ольга", "Дмитро" , "Андрій"],
    phone: "0938128046",
  },
  {
    name: "Андрій",
    age: 17,
    city: "Lviv",
    email: "karas@gmail.com",
    isActive: true,
    points: 120,
    friends: ["Юля", "Іван"],
    phone: "0938128047",
  },
  {
    name: "Дмитро",
    age: 15,
    city: "Kyiv",
    email: "Dmitro@gmail.com",
    isActive: false,
    points: 90,
    friends: ["Ольга", "Дмитро"],
    phone: "0938128045",
  },
  {
    name: "Люба",
    age: 18,
    city: "Zitomr",
    email: "Luba@gmail.com",
    isActive: true,
    points: 140,
    friends: ["Лука", "Іван" , "Лох"],
    phone: "0938128056",
  },
  {
    name: "Іван",
    age: 46,
    city: "Odessa",
    email: "Ivan@gmail.com",
    isActive: true,
    points: 150,
    friends: ["Лука", "Саша" , "Олексій"],
    phone: "0938128056",
  },
];


// const result = people.map((item) => item.points)
// console.log(result)

// const increasePoints = people.map((item) => ({
//     ...item,
//     points: item.points * 1.1
// }))
// console.log(increasePoints)
// console.log(people)

// const finder = people.filter(item => item.city === `Тернопіль` ).map(item => item.name)
// console.log(finder)

// const findPhone = people.map((item) => ({
//     ...item,
//     phone:item.phone.padStart(13, "+38")
// }))
// console.log((findPhone))

// const findIan = people.filter((item) => item.friends.includes("Іван")).map(item => item.name)
// console.log(findIan)

// const moreFriends = people.filter((item) => item.friends[2])
// console.log(moreFriends)

const notActive = people.filter((item) => !item.isActive )
console.log(notActive)