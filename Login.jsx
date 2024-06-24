import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import React Router Link
import "./Loginpage.css";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='forbg'>    
      <div className="login">
        <h4 style={{ fontFamily: "algerian",fontSize:'25px' }}>Login</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="Username"
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              defaultValue="Password"
              className="text_input"
            />
            <input
              type="checkbox"
              id="showPassword"
              onChange={() => setShowPassword(!showPassword)}
            />
          </div>
          <Link to='/styled/Home'>
            <input
              type="submit"
              value="Get started"
              className="btn"
            />
          </Link>
        </form>
        <a href="/styled/Signup" className="link">New user? Click to Sign Up</a>
      </div>
    </div>
  )
}

export default Home;
