import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
      <h1 className='logo'>Navbar</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='search-box'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" className='search-input' placeholder='Search...'/>
      </div>
    </div>
  )
}

export default Navbar