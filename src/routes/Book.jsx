import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data";

import "./book.css";
function Book() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let book = getBook(parseInt(params.bookId, 10));
  return (
    <div
      style={{
        width: "30%",
        margin: "1em",
        padding: "3em",
        backgroundColor: "#1e40af",
        borderRadius: "20px",
        display:"flex",
        flexDirection:"column",
      }}
    >
      <h2>
        {" "}
        {book.number} : {book.name}
      </h2>
      <p>Price: {book.amount}</p>
      <p>Categories: {book.category}</p>
      <p>
        <button
          onClick={() => {
            deleteBook(book.number);
            navigate("/books" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
}

export default Book;
