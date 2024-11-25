import React from 'react'

const Nevigation = () => {
  return (
    <div>
      <nav className='container'>
        <div className="Logo">
          <img src="./images/brand_logo.png" alt="logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className='login'>Login</button>
      </nav>

    </div>
  );
}

export default Nevigation
