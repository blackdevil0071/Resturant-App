import mealsImage from "../../Components/assets/React_Header.png";
import CartButton from "./CartButton";
import classes from "./Header.module.css";
function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <CartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Table full of delicious Food"></img>
      </div>
    </>
  );
}

export default Header;
