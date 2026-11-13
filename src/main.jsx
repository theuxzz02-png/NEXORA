
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ChatIA from './pages/ChatIA.jsx';
import './index.css';

const caminho = window.location.pathname;

const Pagina = caminho === '/ia' || caminho === '/ia/'
  ? ChatIA
  : App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pagina />
  </React.StrictMode>
);

