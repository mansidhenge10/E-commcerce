import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between; /* pushes items left & right */
            align-items: center;
            padding: 15px 30px;
         
          }

          .logo {
            width: 150px;
          }

          .logout-btn {
            background-color: #ff4d4d;
            color: white;
            padding: 8px 18px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
          }

          .logout-btn:hover {
            background-color: #cc0000;
          }
        `}
      </style>

      <div className="navbar">
        <img src={assets.logo} alt="logo" className="logo" />
        <button className="logout-btn">Logout</button>
      </div>
    </>
  )
}

export default Navbar