import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Products from "./components/Products";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
function App() {
  return (
    <>
      {/* Routes define onde serão definidas as rotas. Route a rota em si, passando como parâmetros o path e o element. O path * pega todas as rotas não definidas */}
      {/* Nested Routes se tornam /products/new  */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
