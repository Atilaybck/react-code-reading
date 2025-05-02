// ARROW FUNCTIONS (Ok Fonksiyonları)
// Daha kısa ve modern fonksiyon tanımlama şeklidir.
// Özellikle callback'lerde ve kısa işlemlerde tercih edilir.

// 1. Normal fonksiyon
function sayHello(name) {
    return "Merhaba " + name;
  }
  console.log(sayHello("Ali")); // Merhaba Ali
  
  // 2. Arrow function karşılığı
  const sayHelloArrow = (name) => {
    return "Merhaba " + name;
  };
  console.log(sayHelloArrow("Ayşe")); // Merhaba Ayşe
  
  // 3. Eğer sadece 1 satır varsa return ve süslü parantez kaldırılabilir
  const square = (x) => x * x;
  console.log(square(5)); // 25
  
  // 4. Parametre yoksa parantez zorunlu
  const getTime = () => new Date().toLocaleTimeString();
  console.log(getTime());
  
  // 5. Tek parametrede parantez isteğe bağlıdır
  const greet = name => `Selam ${name}`;
  console.log(greet("Zeynep"));
  
  // 6. Arrow function içindeki `this`, klasik fonksiyonlardan farklı çalışır
  // Bu fark ileri seviyede önemlidir
  