// App.js
import "./App.css";
import Header from "./Components/Layouts/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <div className="App">
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
