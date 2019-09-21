import React from 'react';
import Layout from './containers/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from "./containers/Checkout/Checkout";
import {Route} from "react-router-dom";

const App = () => {
    return (
        <Layout>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/' component={BurgerBuilder} exact/>
        </Layout>
    );
};

export default App;
