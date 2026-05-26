import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { getAllProducts } from "./api/api";
import News from "./components/MainPage/News/News";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <NavBar onSearch={setQuery} />
      <AboutUs />
    </div>
  );
}

export default App;
