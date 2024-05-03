import React from 'react'

const Nav = () => {
  return (
    
       <nav className='container'>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul className='header'>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className='logi'>Login</button>
      </nav>
    
  )
}

export default Nav;
