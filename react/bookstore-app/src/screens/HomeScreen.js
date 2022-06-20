import { useState, useEffect } from "react";
import "./HomeScreen.css";
import BookCard from "../Components/BookCard/BookCard";
import Filter from "../Components/Filter/Filter";
import { ref, db, onValue } from "../Config/firebase";
const HomeScreen = () => {
  const [productState, setProductState] = useState([]);

  const handleFilter = (category) => {
    onValue(ref(db, `books`), async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const propertyValues = Object.values(data);

        const filteredProducts = propertyValues.filter((book) => {
          return book.category === category;
        });
        setProductState(filteredProducts);
      } else {
        setProductState([]);
      }
    });
  };

  useEffect(() => {
   
    onValue(ref(db, `books`), async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const propertyValues = Object.values(data);
        setProductState(propertyValues);
      } else {
        setProductState([]);
      }
    });
  }, []);

  return (
    <div>
      <Filter
        onFilter={handleFilter}
        setProductState={setProductState}
        productState
      />
      <div className="books__wrapper">
        {productState.map((product) => (
          <BookCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
