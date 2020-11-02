import React from 'react'
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import Selection from './img/Selection.png';
import SelectionFooter from './img/Selection-footer.png';


const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='footer'>
      <div className='footer-logo'>
        <img style={{width: '150px'}} src={SelectionFooter} alt='footer-logo' />
      </div>
      <div className='footer-icons'>
      <a className='font-border'>
        <FontAwesomeIcon fa-border className='footer-icon' icon={faFacebookF} />
      </a>
      <a className='font-border'>
        <FontAwesomeIcon className='footer-icon' icon={faInstagram}/>
      </a>
      <a className='font-border'>
        <FontAwesomeIcon className='footer-icon' icon={faLinkedin}/>
      </a>
      <a className='font-border'>
        <FontAwesomeIcon className='footer-icon' icon={faTwitter}/>
      </a>
      </div>
      <div className='footer-contact'>
        <p>Contact</p>
        <p>Home</p>
        <p>Browse</p>
      </div>
      </div>
      <div className='policy'>
        <p>PRIVACY POLICY</p>
        <p>CONDITION OF USE</p>
      </div>
    </section>
  )
}

export default Footer;