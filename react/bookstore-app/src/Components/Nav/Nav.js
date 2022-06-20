import "./Nav.css";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";

const Nav = ({ handleAddBookAppearance, handleShowCartModal }) => {
  const { cartItems, cartquantity } = useContext(CartContext);

  // const getdata=()=>{
  //   var j=0;
  //   for(var i=0;i<cartItems.length;i++){
  //     j += cartItems[i].quantity
  //   }

  //   console.log(j)
  //   // setqunatity(j)

  // }

  return (
    <nav>
      <div className="nav__left">School Bookstore</div>
      <div className="nav__left"></div>
      {/* <div className="nav__middle">
        {/* <div className="input__wrapper">
          <input type="text" placeholder="Search your book..." />
          <i className="fas fa-search" />
        </div>
      </div> */}
      <div className="nav__right">
        <div className="cart__icon">
          <div className="add-book-btn">
            <i
              className="fa fa-plus-circle"
              aria-hidden="true"
              onClick={handleAddBookAppearance}
            />
          </div>
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={handleShowCartModal}
          />

          {cartItems.length >= 0 && (
            <div className="item__count">
              <b>{cartquantity}</b>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
