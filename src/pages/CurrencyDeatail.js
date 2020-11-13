import React, { useEffect, useContext, useState } from 'react';
import { ExchangeRateContext, ExchangeRateContextProvider, } from '../contexts/ExchangeRateContext';
function CurrencyDetail(props) {
    const exchangeRateContext = useContext(ExchangeRateContext);
    useEffect(()=>{
        console.log(props.match.params); 
    }, []);

    const currencyDetail = exchangeRateContext.getCurrencyDetail(
        props.match.params.currencyCode
    );
    console.log('currencyDetail', currencyDetail);
    var json = JSON.stringify(currencyDetail);
    var json_obj = JSON.parse(json);
    let key1 = Object.keys(json_obj);
    console.log('key', key1);

    const listItems = key1.map((k)=>    

    <tr> 
        <td>   
        {k}
        </td>
        <td>
        {currencyDetail[k]}
        </td>
    </tr>
   
    );
    
    return (
        <div>
    
    <table border ="1px solid">
        <tr>
            <th>
                KEY
            </th>
            <th>
                VALUE
            </th>
        </tr>
            {listItems}
            </table> 
        </div>
    );
}

export default CurrencyDetail;