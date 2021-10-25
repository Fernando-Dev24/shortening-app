import React, { useState } from 'react';
/* Contexts */
import { useLinksContexts } from '../contexts/LinksContexts';
/* Components */
import { Statistics } from './Statistics';

export const ShortenForm = () => {
   /* Contexts variables */
   const { links, setLinks } = useLinksContexts();
   const localS = window.localStorage;

   /* States Variables */
   const [userLink, setUserLink] = useState('');
   const API_ENDPOINT = 'https://api.shrtco.de/v2';

   /* handleCopy */
   const handleCopy = ({target}) => {
      const stringToCopy = target.id;
      navigator.clipboard.writeText(stringToCopy);
      target.attributes[1].value = 'btn btn__clipboard copied';
      target.textContent = 'Copied';
   };

   /* handleDelete */
   const handleDelete = ({target}) => {
      const deleteItemArray = links.filter((link) => link.short_link !== target.id);
      localS.setItem('links', JSON.stringify(deleteItemArray));
      setLinks(JSON.parse(localS.getItem('links')));
   };

   /* saveData function */
   const saveData = (results) => {
      const localS = window.localStorage;
      const existingLinks = JSON.parse(localS.getItem('links'));
      if(existingLinks) {
         const newLink = {
            code: results.code,
            short_link: results.full_short_link,
            original_link: results.original_link
         };
         existingLinks.push(newLink);
         localS.setItem('links', JSON.stringify(existingLinks));
         setLinks(JSON.parse(localS.getItem('links')));
         return;
      } else {
         const linkObject = {
            code: results.code,
            short_link: results.full_short_link,
            original_link: results.original_link
         };
         localS.setItem('links', JSON.stringify([linkObject]));
         setLinks(JSON.parse(localS.getItem('links')));
      };
   };

   /* handleSubmit */
   const handleSubmit = async (e) => {
      e.preventDefault();

      if(userLink === "") {
         console.log('Write a valid link');
         return;
      };

      try {
         const response = await fetch(`${API_ENDPOINT}/shorten?url=${userLink}`);
         const { ok, result } = await response.json();
         if(ok) {
            saveData(result);
            setUserLink('');
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <section className="advanced" id="shorten__link">
         <section className="position__up">
            <section className="form__container container">
               <form className="form" onSubmit={handleSubmit}>
                  <input
                     type="url"
                     placeholder="https://yourlink.com"
                     value={userLink}
                     onChange={({target}) => setUserLink(target.value)}
                  />
                  <button className="btn btn__submit">Shorten it!</button>
               </form>
            </section>
            <section className="links container">
               {links &&
                  links.map((link, index) => {
                     return (
                        <article className="link__container" key={index}>
                           <h3 className="link">{link.original_link}</h3>
                           <div className="link__info">
                              <h3 className="link short">{link.short_link}</h3>
                              <button
                                 id={link.short_link}
                                 className="btn btn__clipboard"
                                 onClick={handleCopy}
                              >Copy</button>
                              <button
                                 id={link.short_link}
                                 className="btn btn__clipboard delete"
                                 onClick={handleDelete}
                              >Borrar</button>
                           </div>
                        </article>
                     );
                  })
               }
            </section>
         </section>
         <Statistics />
      </section>
   );
};