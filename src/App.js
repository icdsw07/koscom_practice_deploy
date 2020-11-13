import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, } from 'react-router-dom';
import RootRouter from './routes/RootRouter';
import { ExchangeRateContextProvider, ExchangeRateContext, } from './contexts/ExchangeRateContext';


function App() {
  const [data, setData] = useState([]);



  return (
      <ExchangeRateContextProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
      </ExchangeRateContextProvider>
  );
}

export default App;
