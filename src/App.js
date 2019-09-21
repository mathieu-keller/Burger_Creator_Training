import React from 'react';
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import {Route} from "react-router-dom";

const App = () => {
    return (
        <Layout>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/' component={BurgerBuilder} exact/>
        </Layout>
    );
};

export default App;
