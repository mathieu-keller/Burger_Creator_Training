import React from 'react';
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import {Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <Layout>
          <Routes>
            <Route path='/checkout/*' element={<Checkout/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/' element={<BurgerBuilder/>}/>
          </Routes>
        </Layout>
    );
};

export default App;
