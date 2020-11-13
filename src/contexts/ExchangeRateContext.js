import React, { createContext, useState, useEffect, useCallback, } from 'react'

const ExchangeRateContextValue = {
    data: [],
}
const certKey = 'kwyjhLhydUm6wYKI9ioJVk8NUkj94o9P';


export const ExchangeRateContext = createContext(ExchangeRateContextValue);

export function ExchangeRateContextProvider(props) {
    const [data, setData] = useState([]);
    // const today = new Date();
    // var year = today.getFullYear();
    // var month = today.getMonth()+1
    // var day = today.getDate();
    // if(month < 10){
    //     month = "0"+month;
    // }
    // if(day < 10){
    //     day = "0"+day;
    // } 
    // var today_parsed = year+""+month+""+day;
    // console.log("today",today_parsed);
    const [searchDate, setsearchDate] = useState("2020-11-13");
    const handleDateChange = ev=>setsearchDate(ev.target.value.replaceAll("-",""));

    useEffect(()=>{
        fetch(
          //`https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${certKey}&searchdate=${searchDate}&data=${'AP01'}`
          `http://54.180.114.62:8080/api/currency_list/${searchDate}`
          )
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

