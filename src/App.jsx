import ProductView from "./components/ProductView/main";
import products from './mockdata/products.json';

function App() {
  return (
    <div className="main-app">
      <ProductView products={products} />
    </div>
  );
}

export default App
