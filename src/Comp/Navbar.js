import React from 'react'
import "../navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Quick Chat</span>
      <div className='user'>
        <img src="" alt="" />
        <span>Aditya</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
