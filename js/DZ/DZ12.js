function countProps(obj) {
    return Object.keys(obj).length;
}

const user = {
  name: "Artem",
  age: 16,
  hobby: "programist",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

console.log("");

const fin = countProps(user);
console.log(`Кількість властивостей: ${fin}`);

console.log("");

function findBestEmployee(employees) {
    let bestNam = null
    let bestWork = 0

    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > bestWork) {
            bestWork = tasks
            bestNam = name
        }
    }
    return `${bestNam} виконав ${bestWork} завдань`
}
const team = {
    Daria: 22,
    Dania: 12,
    Mykola: 18,
    Artem: 30,
}
console.log(findBestEmployee(team))

console.log("")

function countTotalSalary(employees) {
    let salary = 0

    for (const [name, sum] of Object.entries(employees)) {
        salary += sum
    }
    return `Сумма всіх зарплат = ${salary}`
}

const salaries = {
    Daria: 1000,
    Dania: 1500,
    Mykola: 800,
    Artem: 1700,
}
console.log(countTotalSalary(salaries));

console.log("")

function getAllPropValues(arr, prop) {
    const result = []
    for (const obj of arr) {
        if (obj.hasOwnProperty(prop))
            result.push(obj[prop])
    }
    return result
}

const products = [
    { name: "Laptop", price: 1500, quantity: 4 },
    { name: "Phone", price: 800, quantity: 10 },
    { name: "Monitor", price: 300, quantity: 7 }
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));

console.log("")

function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
      break;
    }
  }

  return total;
}
console.log(calculateTotalPrice(products, "Phone"));

console.log("")

