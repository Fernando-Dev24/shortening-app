import React from 'react';
/* Icons */
import {
   FaFacebook,
   FaTwitter,
   FaPinterest,
   FaInstagram
} from 'react-icons/fa';
/* Sources */
import { ReactComponent as Logo } from '../images/logo.svg';

export const Footer = () => {
   return (
      <footer className="footer">
         <section className="footer__content container">
            <section className="footer__grid">
               <Logo className="logo" />
               <article className="footer__section">
                  <div className="nav__section">
                     <h4>Features</h4>
                     <ul>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                     </ul>
                  </div>
                  <div className="nav__section">
                     <h4>Resources</h4>
                     <ul>
                        <li>Blog</li>
                        <li>Developer</li>
                        <li>Support</li>
                     </ul>
                  </div>
                  <div className="nav__section">
                     <h4>Company</h4>
                     <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                     </ul>
                  </div>
               </article>
               <nav className="footer__social-media">
                  <button className="btn__social-media"><FaFacebook /></button>
                  <button className="btn__social-media"><FaTwitter /></button>
                  <button className="btn__social-media"><FaPinterest /></button>
                  <button className="btn__social-media"><FaInstagram /></button>
               </nav>
            </section>
         </section>
      </footer>
   );
};