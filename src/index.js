import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BeerPage from './components/BeerPage/BeerPage';
import MainPage from './components/MainPage/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/beer_page/:id" element={<BeerPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
