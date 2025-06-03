// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.
const bankAccount = {
  ownerName: "John",
  accountNumber: "124347365",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    alert(
      `Ваш рахунок поповнено ${amount} загальна сума на рахунку ${this.balance}`
    );
  },
  withdraw(amound) {
    if (this.balance > amound) {
      this.balance -= amound;
      alert(`Зняття коштів успішне зараз на вашому рахунку ${this.balance}`);
    } else {
      alert(
        `Недостатньо коштів на вашому рахунку ${this.balance}! Ви хочете зняти ${amound}`
      );
    }
  },
};
if (confirm("Хочете поповнити рахунок?")) {
  const amount = parseFloat(prompt("Введіть суму поповнення:"));
  if (!isNaN(amount) && amount > 0) {
    bankAccount.deposit(amount);
  } else {
    alert(`Не коректно введені данні`);
  }
} else if (confirm("Хочете зняти гроші?")) {
  const amount = parseFloat(prompt("Скільки хочете зняти?"));
  if (!isNaN(amount) && amount > 0) {
    bankAccount.withdraw(amount);
  } else {
    alert(`Не коректно введені данні`);
  }
} else {
  alert(`Операццію відмінено`);
}

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    isFreezing() {
        return this.temperature < 0;
    }
}
const userInput = prompt("Введіть температуру (°C):");
weather.temperature = parseFloat(userInput);

if (weather.isFreezing()) {
    alert("Температура нижче 0 градусів Цельсія");
} else {
    alert("Температура 0 або вище градусів Цельсія");
}

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 
const user = {
  name: "Artem",
  email: "artem@gmail.com",
  password: "12345",

  login(inputEmail, inputPassword) {
    return this.email === inputEmail && this.password === inputPassword;
  },
};

const enteredEmail = prompt("Введіть ваш email:");
const enteredPassword = prompt("Введіть ваш пароль:");

if (user.login(enteredEmail, enteredPassword)) {
  alert("Вхід успішний!");
} else {
  alert("Невірний email або пароль.");
}

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль.
const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,
  isHighlyRated: function () {
    return this.rating > 8;
  },
};
console.log("Title:", movie.title);
console.log("Director:", movie.director);
console.log("Year:", movie.year);
console.log("Rating:", movie.rating);
console.log("Highly Rated:", movie.isHighlyRated());