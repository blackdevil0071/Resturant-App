// Cart.js
import CartContext from "../../Store/cart-context";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

const cartItemRemoveHandler = () =>{}
const cartItemAddHandler = () =>{}

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null,item.id)}
          onRemove={cartItemRemoveHandler(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
        <span>TotalAmount</span>
        <h2>Total Amount :{totalAmount}</h2> {/* Use the level from context */}
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
