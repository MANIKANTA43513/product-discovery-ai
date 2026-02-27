
import ProductCard from "./ProductCard";
const ProductList = ({ products }) => (
  <div>
    {products.map(p => <ProductCard key={p.id} product={p} />)}
  </div>
);
export default ProductList;
