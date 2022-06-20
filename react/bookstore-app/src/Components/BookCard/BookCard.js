import { useContext } from "react";
import "./BookCard.css";
import formatCurrency from "format-currency";
import CartContext from "../../context/cart/CartContext";
import { postCart } from "../../services//cartServices";

const ProductCard = ({ product }) => {
  const { ...rest } = product;
  const addItemsToDb = async (productData) => {
    try {
      await postCart(productData);
    } catch (error) {}
  };

  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "Lekë " };
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.name}</h4>
        <div className="ProductCard__price">
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <button
          className="ProductCard__button"
          onClick={() => {
            product["quantity"] = 1;
            addToCart(product);
            addItemsToDb(rest);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
