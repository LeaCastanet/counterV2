import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddCounter from "./components/AddCounter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);

function App() {
  const [count, setCount] = useState([0]);

  // const map1 = count.map((elem) => {
  //   return elem - 1;
  // });
  // console.log(map1);

  const addCounter = () => {
    const newCount = [...count];
    newCount.push(0);
    setCount(newCount);
  };

  return (
    <>
      <Header />
      <div className="container">
        {count.length < 3 ? <AddCounter addCounter={addCounter} /> : null}
        <div className="counters">
          {count.map((elem, index) => {
            return <Counter count={count} setCount={setCount} index={index} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
