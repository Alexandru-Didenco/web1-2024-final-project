import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
import Calde from './component/Calde';
import Salate from './component/Salate';
import Desert from './component/Desert';
import Bauturi from './component/Bauturi';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Content />} />
     <Route path="/Calde" element={<Calde />} />
     <Route path="/Salate" element={<Salate />} />
     <Route path="/Desert" element={<Desert />} />
     <Route path="/Bauturi" element={<Bauturi />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;