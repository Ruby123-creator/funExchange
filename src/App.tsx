import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout/layout';
import Home from './component/pages/Home';
import CricketDetails from './component/pages/cricket';
import Cart from './component/pages/cart';
import './assets/css/style.css';
const App: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cricket" element={<CricketDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
