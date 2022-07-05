import React from 'react'
import {Link, Outlet} from "react-router-dom";

import "./app.css"
function App() {
  return (
    <div>
        <h1>Bookkeeper!</h1>

        <nav className='navbar'>
            <Link to="/invoices">Invoices</Link>
            <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default App