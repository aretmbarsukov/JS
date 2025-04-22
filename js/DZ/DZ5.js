const coffee = "Кава"
const tea = "Чай"
const juse = "Сік"
alert(`Виберіть щоб ви хотіли попити?\n 1.${coffee}\n 2. ${tea}\n 3. ${juse}`)
let chuse = Number(prompt("Номер вашого товара:"))
switch (chuse) {
    case 1:
        alert(coffee);
        break;
    case 2:
        alert(tea);
        break;
    case 3:
        alert(juse);
        break;
    default:
         alert("Такого варіанта немає")
}
console.log(chuse);


const day = prompt("Введіть день тижня").toLowerCase()
switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п’ятниця":
        alert("Це робочий день")
        break;
    case "субота":
    case "неділя":
        alert("Це вихідний")
    default:
        alert("Такого дня тижня")
}
console.log(day);



const january = "Січень"
const february = "Лютий"
const march = "Березень"
const april = "Квітень"
const may = "Травень"
const june = "Червень"
const july = "Липень"
const august = "Серпень"
const september = "Вересень"
const october = "Жовтень"
const november = "Листопад"
const december = "Грудень";
const month = Number(prompt("Введіть номер місяця"))
switch (month) {
    case 1:
        alert(january)
        break;
    case 2:
        alert(february)
        break;
    case 3:
        alert(march)
        break;
    case 4:
        alert(april)
        break;
    case 5:
        alert(may)
        break;
    case 6:
        alert(june)
        break;
    case 7:
        alert(july)
        break;
    case 8:
        alert(august)
        break;
    case 9:
        alert(september)
        break;
    case 10:
        alert(october)
        break;
    case 11:
        alert(november)
        break;
    case 12:
        alert(december)
        break;
    default:
        alert("Нажаль місяця під таким номером не існує")
}
console.log(month);




const red = "Червоний"
const yellow = "Жовтий"
const green = "Зелений"
alert(`Виберіть один з кольорів: \n 1. ${red} \n 2. ${yellow} \n 3. ${green}`)
const color = Number(prompt("Виберіть один з кольорів (1, 2, 3):"));
if (color === 1) {
    alert("Стоп")
} else if (color === 2) {
    alert("Чекай")
} else if (color === 3) {
    alert("Йти")
} else {
    alert("Невірний вибір");
}
console.log(color);



const num1 = Number(prompt("Введіть перше число:"))
const num2 = Number(prompt("Введіт друге число:"))
const operator = prompt("Виберіть операцію (+, -, /, *)")
let resualt;
if (operator === "+") {
    resualt = num1 + num2
} else if (operator === "-") {
    resualt = num1 - num2
} else if (operator === "/") {
    resualt = num1 / num2
} else if (operator === "*") {
    resualt = num1 * num2
} else {
    alert("Такого операцію виповнити неможливо")
}
alert(resualt)
console.log(resualt);