import React, { useState } from 'react';
/* Icons */
import { MdViewHeadline } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
/* Sources */
import { ReactComponent as Logo } from '../images/logo.svg';
import Illustration from '../images/illustration-working.svg';

export const Header = () => {
   const windowWidth = window.innerWidth;
   
   /* States variables */
   const [showNavbar, setShowNavbar] = useState(false);

   return (
      <section className="header">
         <header className="navbar">
            <article className="logo">
               <Logo />
            </article>
            {windowWidth <= 768 ?
               <section className="navbar__items">
                  {showNavbar ?
                     <FaTimes
                        className="navbar__icon"
                        onClick={() => setShowNavbar(!showNavbar)} 
                     />
                     :
                     <MdViewHeadline
                        className="navbar__icon"
                        onClick={() => setShowNavbar(!showNavbar)}
                     />
                  }
                  {showNavbar ===  true &&
                     <article className="navbar__mobile">
                        <nav className="items">
                           <span className="item">Features</span>
                           <span className="item">Pricing</span>
                           <span className="item">Resources</span>
                           <button className="btn">Login</button>
                           <button className="btn">Sign Up</button>
                        </nav>
                     </article>
                  }
               </section>
               :
               <section className="navbar__items">
                  <nav className="items">
                     <span className="item">Features</span>
                     <span className="item">Pricing</span>
                     <span className="item">Resources</span>
                  </nav>
                  <nav className="btn__container">
                     <button className="btn">Login</button>
                     <button className="btn btn__primary">Sign Up</button>
                  </nav>
               </section>
            }
         </header>

         <section className="landing container">
            <article className="landing__info">
               <h1>More than just shorter links</h1>
               <p>Build your brand's recognition and get detailed insights on how your links are perfoming.</p>
               <button className="btn btn__primary">Get Started</button>
            </article>
            <article className="landing__pic">
               <img
                  src={Illustration}
                  alt="Shortening links app illustration"
               />
            </article>
         </section>
      </section>
   );
};