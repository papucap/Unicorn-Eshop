import { useState } from "react";
import Steps from "./components/Cart/Steps/Steps";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Steps />

    </>
  );
}

export default App;
