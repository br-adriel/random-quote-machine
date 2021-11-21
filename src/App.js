import "./App.css";
import QuoteBox from "./components/QuoteBox";
import { useState, useEffect } from "react";

const App = () => {
  const [classColor, setClassColor] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => getQuote(), []);

  const getQuote = async () => {
    try {
      const response = await fetch(`https://api.quotable.io/random`);
      const data = await response.json();

      let colorIndex = classColor;
      while (colorIndex === classColor) {
        colorIndex = Math.floor(Math.random() * 8);
      }
      setClassColor(colorIndex);
      setData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className={`bg${classColor}`}>
      <QuoteBox classColor={classColor} data={data} getQuote={getQuote} />
    </main>
  );
};

export default App;
