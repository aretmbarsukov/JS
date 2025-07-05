const people = [
  {
    name: "Олена",
    age: 25,
    city: "Київ",
    email: "olena@example.com",
    isActive: true,
    points: 120,
    friends: ["Іван", "Марія"],
    skills: ["javascript", "html", "css"],
  },
  {
    name: "Іван",
    age: 32,
    city: "Львів",
    email: "ivan@example.com",
    isActive: false,
    points: 90,
    friends: ["Олена", "Петро", "Іван", "Дмитро"],
    skills: ["nodejs", "css", "html"],
  },
  {
    name: "Марія",
    age: 28,
    city: "Одеса",
    email: "maria@example.com",
    isActive: true,
    points: 135,
    friends: ["Олена", "Анна"],
    skills: ["python", "html", "django"],
  },
  {
    name: "Петро",
    age: 40,
    city: "Харків",
    email: "petro@example.com",
    isActive: false,
    points: 75,
    friends: ["Іван", "Дмитро"],
    skills: ["java", "spring", "sql"],
  },
  {
    name: "Анна",
    age: 22,
    city: "Дніпро",
    email: "anna@example.com",
    isActive: true,
    points: 140,
    friends: ["Марія", "Олег"],
    skills: ["javascript", "react", "css"],
  },
  {
    name: "Дмитро",
    age: 35,
    city: "Чернівці",
    email: "dmytro@example.com",
    isActive: true,
    points: 110,
    friends: ["Петро", "Сергій"],
    skills: ["python", "sql", "flask"],
  },
  {
    name: "Наталя",
    age: 30,
    city: "Полтава",
    email: "natalia@example.com",
    isActive: false,
    points: 95,
    friends: ["Катерина", "Іван"],
    skills: ["html", "css", "figma"],
  },
  {
    name: "Олег",
    age: 27,
    city: "Вінниця",
    email: "oleh@example.com",
    isActive: true,
    points: 130,
    friends: ["Анна", "Сергій"],
    skills: ["react", "typescript", "graphql"],
  },
  {
    name: "Катерина",
    age: 40,
    city: "Запоріжжя",
    email: "kateryna@example.com",
    isActive: false,
    points: 100,
    friends: ["Наталя", "Дмитро"],
    skills: ["java", "sql", "kotlin"],
  },
  {
    name: "Сергій",
    age: 31,
    city: "Тернопіль",
    email: "serhiy@example.com",
    isActive: true,
    points: 100,
    friends: ["Олег", "Дмитро"],
    skills: ["go", "docker", "kubernetes"],
  },
];

const calculateTotalBalance = (people) => {
  return people.reduce((total, person) => total + person.points, 0);
};
console.log(calculateTotalBalance(people));

console.log("");

const getUsersWithFriend = (people, friendName) => {
  return people
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(people, "Наталя"));
console.log(getUsersWithFriend(people, "Олег"));

console.log("");

const getNamesSortedByFriendsCount = (people) => {
  return people
    .slice()
    .sort((a, b) => b.friends.length - a.friends.length)
    .map((user) => user.name);
};
console.log(getNamesSortedByFriendsCount(people));

console.log("");

const getSortedUniqueSkills = (people) => {
  const allSkills = people.flatMap((user) => user.skills);
  const uniqueSkills = [...new Set(allSkills)];
  return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(people));