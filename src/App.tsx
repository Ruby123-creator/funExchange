import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './component/Layout/layout';
import Home from './component/pages/Home';


import './assets/css/style.css';


import HorseRacing from './component/pages/HorseRacing';
import GreyHoundRacing from './component/pages/GreyhoundRacing';

import AviatorComp from './component/pages/Aviator';
import AuraComp from './component/pages/Aura';
import SportsEventPage from './component/pages/SportsEventPage';
import WithdrawComponent from './component/pages/withdraw';
import DepositComponent from './component/pages/Deposit';
import TransactionPage from './component/pages/Transaction';
import TransferStatement from './component/pages/TransferStatement';
import OpenBets from './component/pages/OpenBets';
import TimeSetting from './component/pages/Time-Setting';
import SportsDetail from './component/pages/SportsPage';
import Chnage_Password from './component/pages/ChangePasword';
import { useAdminDetails, useLoginVerificationQuery } from './Framework/login';
import { useUI } from './context/ui.context';
import DeclareBets from './component/pages/DeclareBets';
import CasinoGames from './component/pages/casino';




const App: React.FC = () => {
  const { setLoginData, isLoginAsUser, setUserData ,isLogin} = useUI();
  const [val, setValue] = useState<{ username?: string; uniqid?: string }>({});
  const PrivateRoute = ({ element }:any) => {
    return isLogin ? element : <Navigate to="/" />;
  };
  const { data: loginData } = useLoginVerificationQuery({
    username: val?.username || "",
    uniqid: val?.uniqid || "",
  });
const {data: userData} = useAdminDetails({isLogin:isLoginAsUser,username:val?.username})
  useEffect(() => {

    if (isLoginAsUser) {
      try {
        const storedData = localStorage.getItem("credentials");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (parsedData && typeof parsedData === "object") {
            setValue(parsedData);
            setLoginData(parsedData);
          }
        }

        
      } catch (error) {
        console.error("Error parsing credentials from localStorage:", error);
      }
    }
  }, [isLoginAsUser]);

  useEffect(()=>{
    setUserData(userData);
  },[userData])
  return(
    <Layout>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sports-page/:sportsName"  element={<PrivateRoute element={<SportsDetail />} />} />
       
        <Route path="/sports-page/Horse-Racing"  element={<PrivateRoute element={<HorseRacing />} />}/>
        <Route path="/sports-page/Greyhound-Racing"  element={<PrivateRoute element={<GreyHoundRacing />} />}/>
        <Route path="/casino-lobby/:casinoType" element={<PrivateRoute element={<CasinoGames />} />}/>
       
        <Route path="/aviator"  element={<PrivateRoute element={<AviatorComp />} />}/>
        <Route path="/aura"  element={<PrivateRoute element={<AuraComp />} />}/>
         <Route path='/event-page/:sport/:eventId'  element={<PrivateRoute element={<SportsEventPage />} />}/>
            <Route path='/transactions'  element={<PrivateRoute element={<TransactionPage />} />}/>
            <Route path='/transfer-statement'  element={<PrivateRoute element={<TransferStatement />} />}/>
            <Route path='/betting-profit-loss' element={<PrivateRoute element={<TransferStatement />} />}/>
         <Route path='/withdraw'  element={<PrivateRoute element={<WithdrawComponent />} />}/>
         <Route path='/deposit'  element={<PrivateRoute element={<DepositComponent />} />}/>
         <Route path='/account-statement'  element={<PrivateRoute element={<TransferStatement />} />}/>
         <Route path='/change-password'  element={<PrivateRoute element={<Chnage_Password />} />}/>

         <Route path='/open-bets'  element={<PrivateRoute element={<OpenBets />} />}/>
         <Route path='/declare-bets'  element={<PrivateRoute element={<DeclareBets />} />}/>

         <Route path='/settings'  element={<PrivateRoute element={<TimeSetting />} />}/>
      </Routes>
    </Layout>
 
)};

export default App;
