import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './styled/Home';
import PageNotFound from './styled/404page';
import Category from './styled/Catogary';
import Aboutus from './styled/About';
import Login from './styled/Login';
import ChatComponent from './styled/ChatComponent';
import image from "../../404page/src/styled/Images/netlogo.avif";
import Signup from './styled/Signup';

const App = () => {
  return (
    <div>
      <Router>
        <div className='web'>
          <nav>
            <h1 className='logo'>
              <img src={image} alt="" style={{ maxHeight: "5%", width: "12%", float: "left" }} />
            </h1>
            <ul>
              <li><Link to='/styled/Login'>Login</Link></li>
              <li><Link to='/styled/Home'>Home</Link></li>
              <li><Link to='/styled/Catogary'>Category</Link></li>
              <li><Link to='/styled/About'>About</Link></li>
              <li><Link to='/styled/ChatComponent'>ChatComponent</Link></li>
            </ul>
          </nav>
        </div>  

        <Routes>
          <Route path="/styled/Login" element={<Login />} />
          <Route path="/styled/Home" element={<Home />} />
          <Route path="/styled/Catogary" element={<Category />} />
          <Route path="/styled/About" element={<Aboutus />} />
          <Route path="/styled/Signup" element={<Signup />} />
          <Route path="/styled/ChatComponent" element={<ChatComponent />} />

          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
