import React, { useContext, useEffect, useState} from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import Calendar from 'react-calendar';

import { ExchangeRateContext, ExchangeRateContextProvider, } from '../contexts/ExchangeRateContext';
import { Link, } from 'react-router-dom';


function Main(props) {
    const exchangeRateContext = useContext(ExchangeRateContext);
    // const [searchDate, setsearchDate] = useState([]);
    // const handleDateChange = ev=>setsearchDate(ev.target.value.replaceAll("-",""));

    useEffect(()=>{
        console.log('exchangeRateContext.data', exchangeRateContext.data);
    },[exchangeRateContext.data])

    useEffect(()=>{
        console.log('date', exchangeRateContext.searchDate);
    },[exchangeRateContext.searchDate]);
    return(
        <>   
        <input 
        type = 'date' 
        id ='date'
        value={exchangeRateContext.searchDates}
        
        onChange = {exchangeRateContext.handleDateChange}
        />
        <div>
            {exchangeRateContext.data.map((currency, cI)=>{
        return(
            <div>
                <Link 
                    key={cI} 
                    to ={`/currency/${currency.cur_unit}`}
                    style ={{width: '100%', margin: '10px 0', textDecoration: 'none', color: 'black',}}
                    >
                    {currency.cur_nm} ({currency.cur_unit}): {currency.bkpr}
                </Link>
             </div>
        );
      })}
        </div>
        </>
    );
}

export default Main;