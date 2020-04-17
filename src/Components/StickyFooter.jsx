import React from 'react';
import {Link} from 'react-router-dom';

export default function StickyFooter() {
  return (
    <div className="Footer-Container">
      <div className="Footer-Link" id="CopyRight">
        {'Copyright © '}
        <a href="https://material-ui.com/">
          AUTO-GARÇON
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </div>
      <Link className="Footer-Link" id="Footer-Nav-Link" to="/about">About</Link>
      <Link className="Footer-Link" id="Footer-Nav-Link" to="/contact"> Contact Us </Link>
    </div>
  );
}