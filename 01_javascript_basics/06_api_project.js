// 06_api_project.js
// Amaç: API'den kullanıcı verilerini çekmek ve konsola yazdırmak

// Kullanacağımız API: https://jsonplaceholder.typicode.com/users

async function getUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
  
      console.log("📋 Kullanıcı Listesi:");
      users.forEach(user => {
        const { name, email, address } = user;
        console.log(`👤 ${name} - 📧 ${email} - 📍 ${address.city}`);
      });
    } catch (error) {
      console.error("❌ Hata oluştu:", error);
    }
  }
  
  getUsers();
  