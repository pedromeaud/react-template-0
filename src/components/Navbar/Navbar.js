import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from '../Button/Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); // Reverse the menu click

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // Fix SignUp Button
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <p className='font-logo'>Layer's</p> <i class='fab fa-buffer'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/react' className='nav-links' onClick={closeMobileMenu}>
                React
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/node' className='nav-links' onClick={closeMobileMenu}>
                Node
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/reactNative' className='nav-links' onClick={closeMobileMenu}>
                React Native
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/angular' className='nav-links' onClick={closeMobileMenu}>
                Angular
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/vue' className='nav-links' onClick={closeMobileMenu}>
                Vue
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
