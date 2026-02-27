const express = require("express");
const cors = require("cors");
const products = require("./data/products.json");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "*"
}));

app.use(express.json());

/* ===========================
   GET /api/products
   =========================== */
app.get("/api/products", (req, res) => {
  res.json(products);
});

/* ===========================
   POST /api/ask
   Smart Filter Logic (AI-style simulation)
   =========================== */
app.post("/api/ask", (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const lowerQuery = query.toLowerCase();

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );

  res.json({
    summary: `Showing ${filtered.length} product(s) based on your query.`,
    products: filtered,
  });
});

/* =========================== */
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});