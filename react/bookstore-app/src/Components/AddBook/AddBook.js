import Modal from "../Modal/Modal";
import React, { useState } from "react";
import "./AddBook.css";
import { postBook } from "../../services/bookServices";
import { convertToBase64 } from "../../Utilities/ConvertToBase64";
const AddBook = ({ handleAddBookAppearance }) => {
  const [newBook, setNewBook] = useState({
    data: {
      name: "",
      price: 0,
      category: "novel",
      image: " ",
    },
    errors: {},
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postBook(newBook.data);
    handleAddBookAppearance();
  };

  const handleChange = async (e) => {
    const data = { ...newBook.data };
    data[e.target.name] = e.target.value;
    setNewBook({ data });
    if (e.target.name === "image") {
      const file = e.target.files[0];
      const base64Image = await convertToBase64(file);
      data[e.target.name] = base64Image;
    }
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <h3>
          <strong>Add a book</strong>
        </h3>
        <div className="row">
          <div className="col-25">
            <label for="name">Book title</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Book title.."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="category">Category</label>
          </div>
          <div className="col-75">
            <select id="category" name="category" onFocus={handleChange}>
              <option value="novel">novel</option>
              <option value="classic">classic</option>
              <option value="kids">kids</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="price">Price</label>
          </div>
          <br />
          <div className="col-75">
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              placeholder="1300.."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="image">Image</label>
          </div>
          <br />
          <div className="col-75">
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              name="image"
              placeholder="Enter book image URL.."
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <button className="cancelButton" onClick={handleAddBookAppearance}>
            Cancel
          </button>
          <button
            type="submit"
            value="Submit"
            onClick={() => {
              alert("Successful! The book has been added.");
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default AddBook;
