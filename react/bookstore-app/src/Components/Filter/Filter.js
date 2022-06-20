import "./Filter.css";
import { useState, useEffect } from "react";
import { ref, db, onValue } from "../../Config/firebase";
const Filter = ({ onFilter, setProductState }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onValue(ref(db, `books`), async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const propertyValues = Object.values(data);
        setProducts(propertyValues);
      } else {
        setProducts([]);
      }
    });
  }, []);
  return (
    <div className="btn-group">
      <div className="tittle-Container">
        <br />
        <h2>Welcome to School Bookstore</h2>
        <br />
        <h4>Select a category:</h4>
        <br />
      </div>
      <div className="btn-Container">
        <button onClick={() => onFilter("novel")}>Novel</button>
        <button onClick={() => onFilter("classic")}>Classic</button>
        <button onClick={() => onFilter("kids")}>Kids</button>
        <button
          style={{ backgroundColor: "#325cdb" }}
          onClick={() => setProductState(products)}
        >
          All books
        </button>
      </div>
    </div>
  );
};
export default Filter;
