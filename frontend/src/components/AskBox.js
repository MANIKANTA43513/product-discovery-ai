
import { useState } from "react";

const AskBox = ({ onResult }) => {
  const [query, setQuery] = useState("");

  const handleAsk = async () => {
    const res = await fetch("http://localhost:5000/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });
    const data = await res.json();
    onResult(data);
  };

  return (
    <div>
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ask about products" />
      <button onClick={handleAsk}>Ask</button>
    </div>
  );
};

export default AskBox;
