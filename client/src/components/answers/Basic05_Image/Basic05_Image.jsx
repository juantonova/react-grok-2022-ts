import React from 'react';
import logo from '../Basic05_Image/logo.svg';
import './Basic05_Image.css';

function Basic05_Image() {
  return (
    <section className='wrap-image'>
      <img src={logo} className="logo" />
    </section>
  );
}

export default Basic05_Image;