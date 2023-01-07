import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //useNavigate permite que criemos uma programável possibilidade de click, como por exemplo em um botão
  const navigate = useNavigate();

  return (
    <>
      <div>Home Page</div>
      {/* aciona a função e passa o path como parâmetro */}
      <button onClick={() => navigate("order-summary")}>Place Order</button>
    </>
  );
};

export default Home;
