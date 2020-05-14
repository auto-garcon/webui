/*This is the static sticky footer with the auto-garcon copy right sign and the about and contact links.
This is standard and loaded on to every page.
*/
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
      <Link className="Footer-Link" id="Footer-Nav-Link" to="/dashboard/about">About & Contact</Link>
    </div>
  );
}
