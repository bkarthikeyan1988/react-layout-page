import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer>
        <div className="footerContactInfo">
          <span>Contact: &nbsp;</span>
          <a href="http://karthikeyanbalasubramanian.com" rel="noopener noreferrer" target="_blank">Karthikeyan</a>
        </div>
        <div className="copyrightInfo">&copy; 2020 React learning layout page</div>
    </footer>
);

export default Footer;