import React from 'react';
import logo from './logo.svg';
import './Basic05_Image.css';

function Basic05_Image(): JSX.Element {
  return (
    <section className="wrap-image">
      <img src={logo} className="logo" alt="logo" />
    </section>
  );
}

export default Basic05_Image;
