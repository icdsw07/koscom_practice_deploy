import React, { createContext, useState, useEffect, useCallback, } from 'react'

const ExchangeRateContextValue = {
    data: [],
}
const certKey = 'OEIDkG6msYquVZXRoO4v24mfhCwNPzZ9';


export const ExchangeRateContext = createContext(ExchangeRateContextValue);

export function ExchangeRateContextProvider(props) {
    const [data, setData] = useState([]);

    const [searchDate, setsearchDate] = useState('2020-11-11');
    const handleDateChange = ev=>setsearchDate(ev.target.value.replaceAll("-",""));

    useEffect(()=>{
        fetch(`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${certKey}&searchdate=${searchDate}&data=${'AP01'}`)
        .then(response=>{
          return response.json();      
        })
        .then(responseJSON => {
          console.log('response: ', responseJSON);
          setData(responseJSON);
        });
        
      }, [searchDate]);

      const getCurrencyDetail = useCallback(currencyCode =>{
        console.log('currencyCode: ', currencyCode);
        const matchedCurrency = data.filter(currency => {
          return currency.cur_unit === currencyCode;
        });
        console.log('matchedCurrency: ', matchedCurrency);

        if(!matchedCurrency.length) {
          return false;
        }
        return matchedCurrency[0];
      }, [data]);

      return(
          <ExchangeRateContext.Provider value={{
              data, // => data: data
              searchDate,
              handleDateChange,
              getCurrencyDetail,
          }}>
              {props.children}
          </ExchangeRateContext.Provider>
      );
}

export default ExchangeRateContext;

