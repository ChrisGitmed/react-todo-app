import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';

export default function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Home />
    </div>
  );
}
