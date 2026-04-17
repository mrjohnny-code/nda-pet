import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CardsProvider } from '@/context/CardsContext';

import './styles/vendor.scss';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardsProvider>
      <App />
    </CardsProvider>
  </React.StrictMode>,
)
