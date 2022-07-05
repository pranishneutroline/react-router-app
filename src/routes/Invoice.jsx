import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div
      style={{
        width: "30%",
        margin: "1em",
        padding: "4em",
        backgroundColor: "skyblue",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        position:'relative',
        top:"50%",
        left:"50%",
        transform: "translate(-90%,0%)",

      }}
    >
      <h2>Total Due:{invoice.amount}</h2>
      <p>
        {invoice.name}:{invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
}

export default Invoice;
