import React, { useState } from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordEntered, setIsPasswordEntered] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email') {
      setIsEmailValid(validateEmail(value));
    } else if (name === 'password') {
      setIsPasswordEntered(value.trim() !== '');
      if (value.trim() === '') {
        setPasswordError('Password is required');
      } else {
        setPasswordError('');
      }
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      setEmailError('Invalid email address');
      return;
    }
    setEmailError('');
    console.log('Signup data:', formData);
    // Continue with form submission or other actions
  };

  return (
    <div className="bgbody">
      <div className="signup-container">
        <h2 className="signup-title">Signup</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <br></br>
          <label>
            Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <br />
         
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {emailError && <span className="error">{emailError}</span>}
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            {passwordError && <span className="error">{passwordError}</span>}
          </label>
          <br />
          {isPasswordEntered && (
            <Link to='/styled/Home'>
              <button type="submit">Sign Up</button>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
