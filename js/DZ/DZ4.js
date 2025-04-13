//=======1=======
const user = "Artem"
const lastName = "Barsukov"
if (user == "" && lastName == "") {
    console.log("Не всі поля заповнені")
} else {
    console.log("Обидва поля заповнені")
}

//========2=========
const first = Number(prompt("Введди перше число"))
const second = Number(prompt("Введди Друге число"));
const suma = first + second
if (suma > 10) {
    console.log("Сума більше десяти")
} else {
    console.log("Сума менше десяти")
}

//========3========
const messege =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis earum aut voluptas debitis quisquam consequuntur aliquam minima, asperiores ab, quaerat optio hic! Libero iure animi, saepe aspernatur cupiditate a aperiam.";
if (messege.includes("JavaScript")) {
      console.log("Текст містить слово JavaScript")
} else {
    console.log("Текст не містить слово JavaScript")
}

//=========4=========
let gift = "";
const number = Number(prompt("Введіть любе число від 10 до 20"))
if (number >= 10 && number < 21) {
  gift = "Число входить в діапазон від 10 до 20";
}else {
    gift = "Число не входить в діапазон від 10 до 20";
}
console.log(gift)

//=========5==========
const userName = "Artem"
const email = "karasbobra@gmail.com"
const password = "0987654321"
if (userName.length >= 3 &&
    email.includes("@") &&
    email.includes(".") &&
    password.length >= 6) {
console.log("Перенаправлення на іншу сторінку")
} else {
    console.log("Помилка: неправильне заповнення");
}