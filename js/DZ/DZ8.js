console.log(`===============1==============`)
const friends = [`Mango`, `Poly`, `Kiwi`, `Ajax`];
const newFriend = friends.join(",");
console.log(newFriend);

let result = "";
for (let i = 0; i < friends.length; i += 1) {
  result += friends[i];
  if (i < friends.length - 1) {
    result += `,`;
  }
}
console.log(result);

console.log(`===============2==============`)
const cards = [
    `Карточка-1`,
    `Карточка-2`,
    `Карточка-3`,
    `Карточка-4`,
    `Карточка-5`,
];
console.log(cards)

console.log(`===============3==============`);
const delett = cards.splice(2, 1)
console.log(cards)

console.log(`===============4==============`);
const neww = cards.push(`Карточка-6`)
console.log(cards)

console.log(`===============5==============`);
const nrr = `Карточка-3`
const plus = cards.splice(2, 0, nrr)
console.log(cards)