// MAP, FILTER, REDUCE
// Array üzerinde işlem yaparken en çok kullanılan 3 metottur.

// 1. map(): Her elemanı dönüştürür, yeni bir dizi döner.
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log("Map ile karesi:", squared); // [1, 4, 9, 16]

// 2. filter(): Şartı sağlayanları döner.
const even = numbers.filter(num => num % 2 === 0);
console.log("Filter ile çiftler:", even); // [2, 4]

// 3. reduce(): Tüm diziyi tek bir değere indirger.
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce ile toplam:", total); // 10

// Daha karmaşık örnek
const users = [
  { name: "Ali", age: 25 },
  { name: "Ayşe", age: 30 },
  { name: "Mehmet", age: 22 }
];

const names = users.map(user => user.name);
console.log("İsimler:", names); // ["Ali", "Ayşe", "Mehmet"]

const adults = users.filter(user => user.age >= 25);
console.log("25 yaş ve üstü:", adults);

const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log("Ortalama yaş:", avgAge);
