import React, { useState, useEffect, useContext } from "react";

const LinksContexts = React.createContext();
const useLinksContexts = () => useContext(LinksContexts);

const LinksProvider = ({ children }) => {
   /* States variables */
   const [links, setLinks] = useState();
   const [loading, setLoading] = useState(true);

   /* Getting links on localStorage */
   useEffect(() => {
      const localS = window.localStorage;
      setLinks(JSON.parse(localS.getItem('links')));
      setLoading(false);
   }, []);

   return (
      <LinksContexts.Provider value={{links: links, setLinks: setLinks}}>
         {!loading && children }
      </LinksContexts.Provider>
   );
}
 
export { LinksProvider, LinksContexts, useLinksContexts };