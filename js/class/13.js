// const objectA = [
//     { name: "Mykola", age: 14, city: "Kyiv" },
//     { name: "Artem", age: 16, city: "Vinntisa" },
//     { name: "Bogdan", age: 4, city: "Odessa" },
//     { name: "Vlad", age: 22, city: "Poltava"},
// ];
// for (const { name,...rest } of objectA) {
//     console.log(name)
//     console.log(rest)
// }
// for (const element of objectA) {
//     const { name, age, city = "hometown" } = element
//     console.log(city)
//     console.log(age);
//     console.log(name);
// }

// const user = {
//     name: "Artem",
//     age: 16,
//     friends: ["Yaroslav", "Mykola"],
//     location: {
//         country: "Ukraine",
//         city: "Kyiv",
//         street: "Striletska",
//         apartments: 2,
//         name: "rrta",
//     },
//     sex: "Female",
// }
// const { name, age, sex = "no finde", location: { apartment, city, country, street, name: locationName}, friends: [item1, item2] } = user
// console.log(city)
// console.log(item1)
// console.log(locationName)


// const foo = function ({ name, age }= {})  {
//     console.log(name, age)
// };

// console.log(foo({ name: "Anton", age: 15 }))
// console.log(foo())