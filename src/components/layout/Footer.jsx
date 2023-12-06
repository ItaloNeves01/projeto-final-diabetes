import { useState } from 'react';
import './Footer.css';
import undb from './undb-logo.png';

const Footer = () => {
  
    useState(0);

  return (
    <footer>
      <img src={undb}/>
    </footer>
  );
};

export default Footer;