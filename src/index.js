import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Expenses from "./routes/Expenses";
import Invoice from "./routes/Invoice";
import Invoices from "./routes/Invoices";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/invoices" element={<Invoices />} >
        <Route index element ={<main style={{padding:"1rem"}}><p>Select an Invoice</p></main>}/>
        <Route  path=":invoiceId" element={<Invoice/>}/>
      </Route>
      <Route  path="*" element={<main style={{padding:"1rem"}}><p>There is nothing here!</p></main>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
