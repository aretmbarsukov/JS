// const user = {
//     name: `Artem`,
//     userAge: 16,
//     userFriend : ["Artem","Bogdan", "Nazar", "Nikita"],
// }
// console.log(user.userFriend)
// console.log(user['userFriend'])
// console.log(user.Location)
// user.locationn = {
//     city: `Los Angeles`,
//     street: `LesiUkr`,
//     hous: `Big`,
//     apartment: 3
// }
// console.log(user)
// delete user.userAge
// console.log(user);


// const speed = "200 km/h"
// const carModel = "model"

// const car = {
//     speed: speed,
//     enginne: "V8",
//     weight: 1000,
//     brand: "Ferrari",
//     [carModel]: "F40",
// }
// console.log(car)




// Присвоїти змінній apartment об'єкт, який описує квартиру з 11 наступними характеристиками:
//imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
//descr опис, значення "Spacious apartment in the city center";
//rating рейтинг, значення 4,
//price ціна, значення 2153;
//tags - метаінформація, масив ("premium", "promoted", "top"].
// const appartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     ratting: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"]
// };
// appartment.ratting = 100
// console.log(appartment.ratting)
// //Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт
// // з інформацією про власника. Додай йому наступні властивості:
// //пате ім'я власника, значення "Непгу";
// //phone телефон, значення "982-126-1588";
// //email - пошта, значення "henry.carter@aptmail.com".
// appartment.owner = {
//     name: "Неnry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
// };
// console.log(appartment)
// // Доповни код, присвоївши оголошеним змінним вирази звернення
// // до відповідних властивостей об'єкта apartment.
// //aptRating рейтинг;
// //aptDescr - опис,
// //aptPrice - ціна;
// //aptTags теги.

// const aptRating = appartment.rating;
// console.log(aptRating);
// const aptDescr = appartment.descr;
// console.log(aptDescr);
// const aptPrice = appartment.price;
// console.log(aptPrice);
// const aptTags = appartment.tags;
// console.log(aptTags);

// // Доповни код, присвоївши оголошеним змінним вирази звернення довідповідних
// // властивостей об'єкта apartment.
// // ownerNamе ім'я власника;
// // owner Phone телефон власника;
// // owner Email пошта власника;
// // numberOfTags кількість елементів масиву у властивості tags;
// // first Tag перший елемент масиву у властивості tags;
// // lastTag - останній елемент масиву у властивості tags.

// const ownerNamе = appartment.owner.name
// console.log(ownerNamе)
// const ownerPhone = appartment.owner.phone
// console.log(ownerPhone)
// const ownerEmail = appartment.owner.email
// console.log(ownerEmail)
// const numberOfTags = appartment.tags.length;
// console.log(numberOfTags);
// const firstTag = appartment.tags[0];
// console.log(firstTag);
// const lastTag = appartment.tags [appartment.tags.length - 1];
// console.log(lastTag);


// const user = {
//     name: "Artem",
//     age: "16",
//     phone: "674-092-250",
//     userFriend: ["Artem", "Bogdan", "Nazar", "Nikita"],
//     balance: 1000,
    
//     showName () {
//        return this.name
//     },
//     addBalance(amound) {
//         return (this.balance += amound)
//     },
//     minusBalance(amound) {
//         if (this.balance >= amound) {
//             return (this.balance -= amound)
//         } else {
//           return  (`На ${this.balance} не достатньо коштів`)
//         }
//     },
//     addNewFriend(friend) {
//         return this.userFriend.push(friend)
//     }
// };
// console.log(user.showName())
// console.log(user)
// console.log(user.addBalance(2300))
// console.log(user.minusBalance(400))
// console.log(user.minusBalance(1000));
// console.log(user.minusBalance(1000));
// console.log(user.minusBalance(1000));
// console.log(user.addNewFriend("Antony"))
// console.log(user)