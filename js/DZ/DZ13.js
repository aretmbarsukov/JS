const transaction = {
    Deposit: "deposit",
    withraw: "withraw",
}
const account = {
    balance: 0,
    transaction: [],
    id: 1,
    createTransaction(amount, type) {
    const newTransaction = {
        amount: amount,
        type: type,
        id: this.id,
    };
    this.id += 1
    return newTransaction
    },

    deposit(amount) {
        this.balance += amount
        const transaction = this.createTransaction(amount, `deposit`)
        this.transaction.push(transaction)
        return `Поповнено на ${amount}, поточний баланс: ${this.balance}`
    },

    withraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount
            const transaction = this.createTransaction(amount, `withraw`)
            this.transaction.push(transaction)
            return `Знято ${amount}, поточний баланс ${this.balance}`
        } else {
            return `Недостатньо коштів на вашому рахунку`
        }
    },
    getBalance() {
        return `На вашому рахунку ${this.balance} коштів`
    },
    getTransactionDeteils(id) {
        for (const element of this.transaction) {
            if (id === element.id) {
                return element
            } else {
                return `Такої транзакції не існує`
            }
        }
    },
    getTransactionTotal(type) {
        let total = 0
        for (const element of this.transaction) {
             if (type === element.type) {
             //   console.log(element)
             total += element.amount
           }
        }
        return total
    },
}
console.log(account.deposit(100));
console.log(account.deposit(50));
console.log(account.withraw(30));
console.log(account.withraw(150));
console.log(account.getBalance());
console.log(account.getTransactionDeteils(2));
console.log(account.getTransactionTotal(transaction.Deposit));
console.log(account.getTransactionTotal(transaction.withraw));
console.log(account.transaction);

//1
function countProps(obj) {
  return Object.keys(obj).length;
}

//========1========
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
//========2========
const fin = countProps(user);
console.log(`Кількість властивостей: ${fin}`);

console.log("");
//========3========
function findBestEmployee(employees) {
  let bestNam = null;
  let bestWork = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > bestWork) {
      bestWork = tasks;
      bestNam = name;
    }
  }
  return `${bestNam} виконав ${bestWork} завдань`;
}
const team = {
  Daria: 22,
  Dania: 12,
  Mykola: 18,
  Artem: 30,
};
console.log(findBestEmployee(team));

console.log("");
//========4========
function countTotalSalary(employees) {
  let salary = 0;

  for (const [name, sum] of Object.entries(employees)) {
    salary += sum;
  }
  return `Сумма всіх зарплат = ${salary}`;
}

const salaries = {
  Daria: 1000,
  Dania: 1500,
  Mykola: 800,
  Artem: 1700,
};
console.log(countTotalSalary(salaries));

console.log("");
//========5========
function getAllPropValues(arr, prop) {
  const result = [];
  for (const obj of arr) {

    const { [prop]: value } = obj;
    if (value !== undefined) {
      result.push(value);
    }
  }
  return result;
}

const products = [
  { name: "Laptop", price: 1500, quantity: 4 },
  { name: "Phone", price: 800, quantity: 10 },
  { name: "Monitor", price: 300, quantity: 7 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price"));
console.log(getAllPropValues(products, "quantity"));

console.log("");
//========6========
function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {

    const { name, price, quantity } = product;
    if (name === productName) {
      total = price * quantity;
      break;
    }
  }

  return total;
}
console.log(calculateTotalPrice(products, "Phone"));