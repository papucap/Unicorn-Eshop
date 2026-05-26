import { useState } from "react";
import "./App.css";
import ProductBox from "./components/MainPage/ProductBox";
import Contact from "./components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProductBox />
    </>
  );
}

export default App;
