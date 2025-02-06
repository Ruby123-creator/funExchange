import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout/layout';
import Home from './component/pages/Home';
import CricketDetails from './component/pages/Cricket/cricket';
import Cart from './component/pages/cart';
import './assets/css/style.css';
import Football from './component/pages/Football';
import Tennis from './component/pages/Tennis';
import HorseRacing from './component/pages/HorseRacing';
import GreyHoundRacing from './component/pages/GreyhoundRacing';
import LiveCasino from './component/pages/LiveCasino';
import SlotGameLobby from './component/pages/Slots';
import CrashGames from './component/pages/CrashGames';
import FishingGames from './component/pages/FishingGames';
import AviatorComp from './component/pages/Aviator';
import AuraComp from './component/pages/Aura';
const App: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports-page/Cricket" element={<CricketDetails />} />
        <Route path="/sports-page/Football" element={<Football />} />
        <Route path="/sports-page/Tennis" element={<Tennis />} />
        <Route path="/sports-page/Horse-Racing" element={<HorseRacing />} />
        <Route path="/sports-page/GreyHound-Racing" element={<GreyHoundRacing />} />
        <Route path="/casino-lobby/casino" element={<LiveCasino />} />
        <Route path="/casino-lobby/slot-games" element={<SlotGameLobby />} />
        <Route path="/casino-lobby/slot-games/Crash" element={<CrashGames />} />
        <Route path="/casino-lobby/slot-games/Shooting" element={<FishingGames />} />
        <Route path="/aviator" element={<AviatorComp />} />
        <Route path="/aura" element={<AuraComp />} />



        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
