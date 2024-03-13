import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import ArtGallery from './ArtGallery';
import Essays from './Essays'; // Adjust the import path as necessary

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/art" element={<ArtGallery />} />
          <Route path="/essays" element={<Essays />} />
          {/* Update other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
