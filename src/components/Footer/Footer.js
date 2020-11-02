import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Programming Newsletter to recive our lattest news
        </p>
        <p className='footer-subscription-text'>You can unsubscribe at any time</p>
        <div className='input-input-areas'>
          <form>
            <input type='email' name='email' placeholder='Your Email' className='footer-input' />
            <Button buttonStyle='btn-outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Our Stack</Link>
            <Link to='/'>Carreres</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
            <Link to='/'>Technology's</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Videos</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              PMC <i class='fab fa-buffer'></i>
            </Link>
          </div>
          <small className='website-rights'>PMC 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blanks'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blanks'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </Link>
            <Link className='social-icon-link twitter' to='/' target='_blanks' aria-label='Twitter'>
              <i className='fab fa-twitter'></i>
            </Link>
            <Link className='social-icon-link youtube' to='/' target='_blanks' aria-label='Youtube'>
              <i className='fab fa-youtube'></i>
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='/'
              target='_blanks'
              aria-label='Linkedin'
            >
              <i className='fab fa-linkedin'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;