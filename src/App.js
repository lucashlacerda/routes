import React from "react";

import { Route, Routes } from "react-router-dom";
// import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Products from "./components/Products";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
const LazyAbout = React.lazy(() => import("./components/About"));
//Só renderiza o component quando este for aberto

function App() {
  return (
    <>
      {/* Routes define onde serão definidas as rotas. Route a rota em si, passando como parâmetros o path e o element. O path * pega todas as rotas não definidas */}
      {/* Nested Routes se tornam /products/new  */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Implementação lazy loading */}
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          {/* Define a rota "padrão" que será renderizada na url do pai*/}
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="users/admin" element={<Admin />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
