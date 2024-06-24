import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <h1 className='logo' style={{color:'red'}}>NETFLIX</h1>
            <ul>
              <li><Link to='/styled/Login'>Login</Link></li>
              <li><Link to='/styled/Home'>Home</Link></li>
              <li><Link to='/styled/Catogary'>Category</Link></li>
              <li><Link to='/styled/About'>About</Link></li>
            </ul>
          </nav>
          <Outlet/>
    </div>
  )
}

export default Navbar