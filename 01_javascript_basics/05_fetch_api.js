// FETCH API
// Web'den veri çekmek için kullanılır (örneğin bir REST API'den).
// fetch() fonksiyonu promise döner, bu yüzden .then() veya async/await ile kullanılır.

// 1. .then() ile fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log("Kullanıcılar:", data);
  })
  .catch((error) => {
    console.error("Hata oluştu:", error);
  });

// 2. async/await ile fetch (modern yöntem)
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Async/Await ile kullanıcılar:", data);
  } catch (err) {
    console.error("Hata oluştu:", err);
  }
}

fetchUsers();
