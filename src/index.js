import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Cart from "./routes/Cart";
import Book from "./routes/Book";
import Books from "./routes/Books";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/expenses" element={<Cart />} />
      <Route path="/books" element={<Books />} >
        <Route index element ={<main style={{padding:"1rem"}}><p>Select an book</p></main>}/>
        <Route  path=":bookId" element={<Book/>}/>
      </Route>
      <Route  path="*" element={<main style={{padding:"1rem"}}><p>There is nothing here!</p></main>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
