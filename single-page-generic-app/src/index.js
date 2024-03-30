import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css';
import Header from './header/header';
import Works from './works/works';
import Services from './services/services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> {/* Envuelve tu aplicación con <Router> */}
    <React.StrictMode>
     <Header />
     <Works />
     <Services />

    </React.StrictMode>
  </Router>
);


