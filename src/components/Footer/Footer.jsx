import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faTwitter,faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
      <div className='footerContainer footerOne'>
        <h1>RocknRolla</h1>
        <p>
          News Playlists Store
          © 2024 RocknRolla. All Rights Reserved. Help Wanted | Advertising Info | Contact Us
          Privacy Policy | How We Use Your Data | Do Not Sell My Personal Information | Your California Privacy Rights | Terms and Conditions
        </p>
      </div>
      <div className='footerContainer footerTwo'>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: '#E1306C' }}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      </div>
    </footer>
  )
}

export default Footer