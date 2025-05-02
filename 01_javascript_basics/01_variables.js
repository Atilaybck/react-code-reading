// VARIABLES (Değişkenler)
// JavaScript'te 3 şekilde değişken tanımlanır: var, let, const
// - `var`: Eski yöntemdir, scope problemi vardır. Tavsiye edilmez.
// - `let`: Güncel değişken tanımı, değeri sonradan değişebilir.
// - `const`: Sabit tanımdır, bir kez atanır, değiştirilemez (ama objeler ve diziler değişebilir).

// VAR örneği (kullanmaman önerilir)
var name = "Ali";
console.log("Var ile:", name);

// LET örneği
let age = 25;
console.log("Let ile:", age);
age = 26; // değeri değiştirilebilir
console.log("Yeni yaş:", age);

// CONST örneği
const city = "İstanbul";
console.log("Const ile:", city);
// city = "Ankara"; // ❌ Hata verir, const değiştirilemez

// CONST ile array
const colors = ["red", "green"];
colors.push("blue"); // ✅ içeriği değiştirilebilir
console.log(colors);

// CONST ile object
const user = { name: "Ayşe", age: 30 };
user.age = 31; // ✅ içeriği değiştirilebilir
console.log(user);
