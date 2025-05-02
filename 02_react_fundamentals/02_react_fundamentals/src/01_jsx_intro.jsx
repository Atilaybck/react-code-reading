function JsxIntro() {
    const name = "Atılay";
    const isLoggedIn = true;
  
    return (
      <div>
        <h1>Welcome to React!</h1>
        <p>Hello, {isLoggedIn ? name : "Guest"} 👋</p>
        <p>Today is {new Date().toLocaleDateString()}</p>
      </div>
    );
  }
  
  export default JsxIntro;
  