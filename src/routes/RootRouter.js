import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from '../pages/Main';
import CurrencyDetail from '../pages/CurrencyDeatail';

function RootRouter(props){
    return(
        <Switch>
        <Route exact path ='/'>
            <Main />
        </Route>
        <Route path='/currency/:currencyCode' component ={CurrencyDetail}/>
        </Switch>
    );
}

export default RootRouter;