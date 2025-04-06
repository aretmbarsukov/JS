//====================05.04.2025=====================

// console.dir(String);

//====індиксація====

// const message = "Hello world javascript";
// console.log(message);
// console.log(message[6]);
// console.log(message.length);//отримання довжини рядка
// console.log(message[message.length - 1])//отримання останнього елементу рядку


//властивість length вона викликаїця без () дужок це є властивість
// const message = "Hello World JavaScript";
// console.log(message);
// console.log(message.toLowerCase());//метод, який перетворює всі літери в нижній регістр
// console.log(message.toUpperCase());//метод, який перетворює всі літери в верхній регістр


// const userName = "artem";
// const name = prompt("Введіть ім'я:") .toLowerCase();
// const result = userName === name;
// console.log(result);


// const num = 4
// console.log(num)
// console.log(typeof num)
// const convertedString = num.toString()
// console.log(convertedString)
// console.log(typeof convertedString)


// ===шаблонний рядок виклиуається з `` а підставлення змінних ${STRING} це інтерполяція===

// зшиває два значення
// const firstName = "Artem"
// const lastName = "Barsukov"
// console.log(firstName + " " + lastName)
// console.log(`My name is ${firstName} my last name is ${lastName}`)


// const kiwi = "karas"
// console.log(kiwi)

// const ananas = prompt("Print your name").toLowerCase()
// console.log(ananas)

// const resalt = kiwi === ananas
// console.log(resalt)


//мктод який буде вирізати пробіли
// const kiwi = "KARAS"
// console.log(kiwi)

// const ananas = prompt("Print your name").toUpperCase().trim()
// console.log(ananas)

// const resalt = kiwi === ananas
// console.log(resalt)


//==============06.04.2025=================

//шукає слова або речення в рядку та пише в консоль true або false
// const lorem = "Lorem ipsum dolor sit karasbobra@gmail.com amet consectetur +380938128046 adipisicing elit. Exercitationem sale necessitatibus illum span dignissimos provident quos! Tempora iste nihil consequatur quo rerum.Corrupti, voluptas! Non quam at molestiae reprehenderit consectetur sequi rerum!"
// console.log(lorem.includes(".com"));
// console.log(lorem.includes("+38"));
// console.log(lorem.includes("span"));
// console.log(lorem.includes("@"));


//знаходить під яким індексом знаходиться елемент, якщо немає то -1
// const lorem = "Lorem ipsum dolor sit amet consectetur span adipisicing elit. Exercitationem sale necessitatibus illum span dignissimos provident quos! Tempora iste nihil consequatur quo rerum.Corrupti, voluptas! Non quam at molestiae reprehenderit consectetur sequi rerum!"
// console.log(lorem.indexOf("span"));
// console.log(lorem.indexOf("span") !== -1);


//перевіряю на наявність символів на почадку рядка або кінці рядка
// const lorem = "Lorem ipsum dolor sit amet consectetur span adipisicing elit. Exercitationem sale necessitatibus illum span dignissimos provident quos! Tempora iste nihil consequatur quo rerum.Corrupti, voluptas! Non quam at molestiae reprehenderit consectetur sequi rerum!"
// console.log(lorem.startsWith("Lorem ipsum dolor sit amet"));//чи мочинається рядок з певних символів
// console.log(lorem.endsWith("sequi rerum!"));//чи закінчується рядок певними символами


// додає на почадку або в кінці рядка значення яке визадали в змінній
// const text = "0938128046";
// console.log(text.length)
// console.log(text.padStart(13, "+38"))//додає символи на початок рядка
// const message = " - український номер міжнародного формату"
// console.log(message.length)
// console.log(text.padEnd(51, message))//додає символи в кінець рядка


//додає автоматично 3 символи +38 на початок рядка
// const userPhone = prompt("Введіть номер телефону:")
// console.log(userPhone.length)
// const mosify = userPhone.padStart(userPhone.length + 3, "+38")
// console.log(mosify)



// const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sale necessitatibus illum dignissimos provident quos! Tempora iste nihil consequatur quo rerum.Corrupti, voluptas! Non quam at molestiae reprehenderit consectetur sequi rerum!"
// console.log(lorem.length)
// console.log(lorem.slice()) //копія рядка
// console.log(lorem.slice(0, 40)) //вирізає з рядка символи з 0 по 40
// const firstSerchstring = lorem.indexOf("span")
// console.log
// const lastSerchstring = lorem.lastIndexOf("Exercitationem")
// console.log(lorem.indexOf("span"))
// console.log(lorem.slice(firstSerchstring, lastSerchstring))



// Задача 1
//1) Створити змінну яка містить рядок з вашим ім'ям.
//2) Створити змінну яка містить рядок з вашим прізвищем.
//3) за допомогою конкатенації зшийте ці змінні у єдиний рядок.
//4) Використати метод length, та вивести у консоль кількість символів у рядку.
//5) Використайте шаблонний рядок, у якому напишіть "Моне звуть" та підставте значення змінної з вашим ім'ям та прізвищем, а потім напишіть "кількість символів у рядку" та підставте змінну з довжиною рядка..
//6) веведіть результат

// const userName = prompt("Введіть ім'я:")
// const lastName = prompt("Введіть прізвище:")
// console.log(userName);
// alert(userName + " " + lastName)
// console.log(userName.length + lastName.length)
// console.log(`Мене звуть ${userName} ${lastName} кількість символів у рядку ${userName.length + lastName.length}`);