// /*
//  * Типів транзакцій всього два.
//  * Можна покласти або зняти гроші з рахунку.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   // Лічильник для id транзакцій
//   id: 1,

//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const newTransaction = {
//       amount: amount, // ✅ виправлено "aount" на "amount"
//       type: type,
//       id: this.id,
//     };
//     this.id += 1;
//     return newTransaction;
//   },

//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції,
//    * після чого додає його в історію транзакцій.
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     return `Поповнення: +${amount} грн`;
//   },

//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Якщо коштів достатньо — створює транзакцію,
//    * інакше — повідомляє про нестачу.
//    */
//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//       return `Зняття: -${amount} грн`;
//     } else {
//       return "Не достатньо коштів на вашому рахунку";
//     }
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return `На вашому рахунку ${this.balance} грн`;
//   },

//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const element of this.transactions) {
//       if (id === element.id) {
//         return element;
//       }
//     }
//     return "Такої операції не було";
//   },

//   /*
//    * Метод повертає суму транзакцій певного типу
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const element of this.transactions) {
//       if (type === element.type) {
//         total += element.amount;
//       }
//     }
//     return total;
//   },
// };

// // --- Тестування ---
// console.log(account.deposit(12));
// console.log(account.deposit(135));
// console.log(account.withdraw(50));
// console.log(account.withdraw(97));
// console.log(account.deposit(13));
// console.log(account.withdraw(1));

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(7));
// console.log("Сума поповнень:", account.getTransactionTotal("deposit"));
// console.log("Сума зняття:", account.getTransactionTotal("withdraw"));



// const user = {
//   name: "Artem",
//   age: 16,
//   hobby: "programist",
//   premium: true,
// };

// // 1. Додаємо поле mood
// user.mood = "happy";

// // 2. Змінюємо hobby
// user.hobby = "skydiving";

// // 3. Змінюємо premium
// user.premium = false;

// // 4. Виводимо вміст об'єкта
// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// // Деструктуризація (якщо треба отримати значення окремо)
// const { name, age, hobby, premium, mood } = user;

// console.log("\nОкремі змінні після деструктуризації:");
// console.log(name, age, hobby, premium, mood);
// console.log(hobby)