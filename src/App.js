import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './screen/Login';
import { Homepage, News, Cryptocurrencies, CryptoDetails} from './components';
import Logged from './components/Logged';

function Home() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
      </Routes>
      <Routes>
      <Route exact path="/Log" element={<Logged />}>
      <Route exact path="home" element={<Homepage />}/>
      <Route exact path="cryptocurrencies" element={<Cryptocurrencies />}/>
      <Route exact path="crypto/:coinId" element={<CryptoDetails />}/>
      <Route exact path="news"element={<News />}/>
      </Route>
      </Routes>
    </>
        
    
  );
}
export default Home;
