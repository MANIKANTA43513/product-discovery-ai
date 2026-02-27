
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import AskBox from "./components/AskBox";

function App() {
  const [products, setProducts] = useState([]);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleResult = (data) => {
  if (data.products) {
    setProducts(data.products);
    setSummary(data.summary || "");
  } else {
    alert(data.error || "Something went wrong");
  }
};

  return (
    <div style={{padding:"20px"}}>
      <h1>Product Discovery</h1>
      <AskBox onResult={handleResult} />
      {summary && <p><strong>AI Summary:</strong> {summary}</p>}
      <ProductList products={products} />
    </div>
  );
}

export default App;
