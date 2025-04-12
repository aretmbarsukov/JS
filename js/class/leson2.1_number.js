 //Math min шукає найменше  число
// console.log(Math.min(1, 2, 3, 4, 5));


//Math max шукає найбільше число
// console.log(Math.max(1, 2, 3, 4, 5));


//Math pow підносить до степеня
// console.log(Math.pow(2, 3));


// const num = "12.45kjh";
// console.log(Number.parseInt(num));


//округляє до меншого цілого числа
// const num = 15.6;
// console.log(Math.floor(num));


//округляє до більшого цілого числа
// console.log(Math.ceil(12.3));


//округляє до найближчого цілого числа
// console.log(Math.round(12.3));


//квадратний корінь
// console.log(Math.sqrt(16));


// випадкове число з плаваючою комою
// const min = 10;
// const max = 100;
// console.log(Math.random() * (max - min) + min);


//Випадкове ціле число
// const min = 10;
// const max = 100;
// console.log((Math.random() * (max - min) + min).toFixed());
// console.log(Math.round(Math.random() * (max - min) + min));


// Напишіть скрипт, який просить відвідувача ввесити два числа, і в результаті показує їх суму.
// const firstNumber = Number(prompt("Введіть перше число:"));
// const secondNumber = Number(prompt("Введіть друге число:"));

// const sum = firstNumber + secondNumber;
// alert(sum);


// Напишіть скрипт який знаходить площу прямокутника. Висота 23cм, ширина 10 см - всі данні зберігатися в змінних.
// Значення площі повинно зберігається в числові змінні.
// Знаходження площі прямокутника
// const height = Number.parseInt((prompt("Введіть висоту прямокутника")));
// const width = Number.parseInt((prompt("Введіть ширину прямокутника")));
// const resalt = height * width;
// console.log((resalt) + " см²");


//виведіть в консоль найбільше і найменше значення серед заданих (2, 34, 99, 3, 22, 36, 733, 18)
// console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
// console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));


//2. Створити змінні к1... к4, в них почергово записати ТІЛЬКИ результат приведення до ДРОБОВОГО ЧИСЛА
//  з даних: 1) 5px; 2) 12djd334; 3) 12.45asdwe12; 4) qwqweeewq;
// const k1 = "5px";
// const k2 = "12djd334";
// const k3 = "12.45asdwe12";
// const k4 = "qwqweeewq";

// console.log(Number.parseFloat(k1));
// console.log(Number.parseFloat(k2));
// console.log(Number.parseFloat(k3));
// console.log(Number.parseFloat(k4));


//4. У змінну random згенеруйте випадкове число від 3 до 19 включно.
// Результат виведіть в консоль

// const min = 3;
// const max = 19;
// console.log(Math.round(Math.random() * (max - min) + min));


//У прямокутного трикутника дві сторони зі значенням 3 і 4. Знайдіть гіпотенузу к по теоремі Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор піднесення до степеня **). Результат та дані повинні зберігатися в змінних.
// Довжини двох сторін прямокутного трикутника
// const sideA = 3;
// const sideB = 4;

// const hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// console.log(hypotenuse);


//Напишіть скрипт, який знаходить обсяг циліндра висотою 10м і діаметром основи 4м, результат та дані повинні зберігатися в змінних.
// const height = 10; 
// const d = 4;
// const radius = d / 2; 
// console.log(Math.PI);
//10 * PI * 1/2 d^2
// console.log(Math.round(height * Math.PI * Math.pow(radius, 2)));


