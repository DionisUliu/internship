import Cart from "./Components/Cart/Cart";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./screens/HomeScreen";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import AddBook from "./Components/AddBook/AddBook";
import React from "react";
import { useState } from "react";

const App = () => {
  const [bookAppearance, setBookAppearance] = useState(false);
  const [cartAppearance, setCartAppearance] = useState(false);

  const handleAddBookAppearance = () => {
    if (bookAppearance) {
      setBookAppearance(false);
    } else {
      setBookAppearance(true);
    }
  };

  const handleShowCartModal = () => {
    if (cartAppearance) {
      setCartAppearance(false);
    } else {
      setCartAppearance(true);
    }
  };
  return (
    <div className="App">
      {bookAppearance && (
        <AddBook handleAddBookAppearance={handleAddBookAppearance} />
      )}
      {cartAppearance && <Cart handleShowCartModal={handleShowCartModal} />}
      <Nav
        handleAddBookAppearance={handleAddBookAppearance}
        handleShowCartModal={handleShowCartModal}
      />
      <Banner />
      <HomeScreen />
      <Footer />
    </div>
  );
};

export default App;
