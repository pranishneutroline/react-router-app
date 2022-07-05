import React from 'react'
import {Link, Outlet} from "react-router-dom";

import "./app.css"
function App() {
  return (
    <div>
        <h1>Bookkeeper!</h1>

        <nav className='navbar'>
            <Link to="/books">Books</Link>
            <Link to="/cart">Cart</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default App