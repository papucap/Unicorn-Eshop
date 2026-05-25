import { useState } from "react";
import "./App.css";
import ProductInfo from "./components/ProductInfo/ProductInfo";

function App() {
  const [count, setCount] = useState(0);

  return <><ProductInfo></ProductInfo></>;
}

export default App;
