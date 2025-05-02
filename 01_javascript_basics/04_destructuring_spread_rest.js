// DESTRUCTURING, SPREAD, REST

// 1. DESTRUCTURING: Objeler veya dizilerden veri çıkarmayı kolaylaştırır

const user = { name: "Zeynep", age: 28, city: "İzmir" };

// Normal erişim:
console.log(user.name);

// Destructuring ile:
const { name, city } = user;
console.log("İsim:", name);   // Zeynep
console.log("Şehir:", city);  // İzmir

// Dizi destructuring:
const arr = [10, 20, 30];
const [a, b] = arr;
console.log("a:", a); // 10
console.log("b:", b); // 20

// 2. SPREAD (...): Objeleri veya dizileri kopyalar, birleştirir

const colors = ["red", "blue"];
const newColors = [...colors, "green"];
console.log("Yeni renkler:", newColors); // ["red", "blue", "green"]

const person = { name: "Ahmet", age: 35 };
const newPerson = { ...person, city: "Ankara" };
console.log("Yeni kişi:", newPerson);

// 3. REST (...): Fazla verileri toplar (parametre ya da destructuring içinde)

function toplam(...sayilar) {
  return sayilar.reduce((a, b) => a + b, 0);
}
console.log("Toplam:", toplam(1, 2, 3, 4)); // 10

const { age, ...others } = newPerson;
console.log("Yaş dışındakiler:", others);
