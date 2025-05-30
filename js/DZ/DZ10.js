function countItems(array, condition) {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }
  return count;
}

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));
console.log("")
//===============02==================
const calculate = (a, b, operation) => operation(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) return 'Помилка: ділення на нуль';
  return a / b;
};

console.log(calculate(10, 5, add));      // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide));   // 2
console.log(calculate(10, 0, divide));   // Помилка
console.log("")
//===============03==================
function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    console.log(messageCreator(i));
  }
}

const helloMessage = (i) => `Привіт №${i + 1}`;
const countdown = (i) => `Залишилось ${5 - i} секунд`;
const warning = (i) => ` Повідомлення ${i + 1}: Увага!`;

repeatMessage(3, helloMessage);
repeatMessage(5, countdown);
repeatMessage(2, warning);
console.log("")
//===============04==================
function processMovies(movies, action) {
  for (let i = 0; i < movies.length; i++) {
    action(movies[i], i);
  }
}

const movies = ["Матриця", "Інтерстеллар", "Темний лицар", "Форест Ґамп"];

const printTitle = (movie, index) => console.log(`${index + 1}. ${movie}`);
const shoutTitle = (movie) => console.log(movie.toUpperCase());
const reviewTitle = (movie) => console.log(` ${movie} — чудовий вибір!`);

processMovies(movies, printTitle);
processMovies(movies, shoutTitle);
processMovies(movies, reviewTitle);