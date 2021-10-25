import React from "react";
import ReactDOM from 'react-dom';
/* Contexts */
import { LinksProvider } from "./contexts/LinksContexts";
/* Components */
import { ShorteningApp } from "./ShorteningApp";
/* Sources */
import './scss/index.scss';

ReactDOM.render(
  <LinksProvider>
    <ShorteningApp />
  </LinksProvider>,
  document.getElementById('root')
);