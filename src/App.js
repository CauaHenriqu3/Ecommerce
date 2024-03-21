import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";
import SidebarCart from "./components/SidebarCart";

function App() {
  const [products, setProduct] = useState([]);
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCartTotal = (value) => setCartTotal(cartTotal + value);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);

  const addProductToCart = (id) => {
    const productToAdd = products.filter((product) => product.id === id)[0];
    if (selectedProducts.includes(productToAdd)) return;
    setSelectedProducts(selectedProducts.concat(productToAdd));
    setCartTotal(cartTotal + productToAdd.price);
  };

  const removeProductFromCart = (id) => {
    const newSelectedProducts = selectedProducts.filter(
      (product) => product.id !== id
    );
    setSelectedProducts(newSelectedProducts);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          selectedProducts={selectedProducts}
          setShowSidebarCart={setShowSidebarCart}
          addProductToCart={addProductToCart}
        />
        <SidebarCart
          addToCartTotal={addToCartTotal}
          removeProductFromCart={removeProductFromCart}
          cartTotal={cartTotal}
          selectedProducts={selectedProducts}
          setShowSidebarCart={setShowSidebarCart}
          showSidebarCart={showSidebarCart}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  addProductToCart={addProductToCart}
                  products={products}
                />
              }
            />
            <Route
              path="/products"
              element={
                <ProductsPage
                  addProductToCart={addProductToCart}
                  products={products}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
