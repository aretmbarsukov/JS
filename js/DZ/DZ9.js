const logItems = function (array) {
    const newArray = []
    for (let i = 0; i < array.length; i += 1){
        // console.log(i + 1)
        // console.log(array[i])
        // console.log(`${i + 1} - ${array[i]}`)
        newArray.push(`${i + 1} - ${array[i]}`);
    }
    return newArray
}
console.log(logItems(["Mango", "Poly", "Ajax"]));


console.log("")
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
    const numberOfWords = words.length;
    
  const totalPrice = numberOfWords * pricePerWord;
  return totalPrice;
}
const result = calculateEngravingPrice("Люблю тебе назавжди", 10);
console.log(result);


console.log("")
function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.log(findLongestWord("Я люблю програмувати на JavaScript"));



console.log("")
function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}
console.log(formatString("Це короткий текст."));
console.log(formatString("Це дуже довгий текст, який перевищує сорок символів."));


console.log("")
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}
console.log(checkForSpam("Buy now! SALE is on!"));
console.log(checkForSpam("This is just a regular message"));
console.log(checkForSpam("Beware of SPAM emails."));


console.log("")
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число:");

  if (input === null) {
    break;
  }

  const number = Number(input);

  if (isNaN(number)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }

  numbers.push(number);
}if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}


console.log("")
const logins = ["user123", "admin", "guest2024"];
function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login);
  return "Логін успішно доданий!";
}
console.log(addLogin(logins, "superuser"));
console.log(addLogin(logins, "us"));
console.log(addLogin(logins, "admin"));
