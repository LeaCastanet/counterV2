import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddCounter from "./components/AddCounter";

function App() {
  const [count, setCount] = useState([0]);

  const map1 = count.map((elem) => {
    return elem - 1;
  });
  console.log(map1);

  return (
    <>
      <div className="container">
        <Header />
        <div>
          {count.map((elem) => {
            <Counter count={count} setCount={setCount} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
