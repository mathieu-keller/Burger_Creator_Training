import React, {useEffect, useState} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData";

const Checkout = props => {
    const [ingredients, setIngredients] = useState({});
    const [price, setPrice] = useState({});
    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const newIngredients = {};
        let tempPrice = 0;
        for (let param of query.entries()) {
            if (param[0] !== 'price') {
                newIngredients[param[0]] = +param[1];
            } else {
                tempPrice = +param[1];
            }
        }
        setIngredients(newIngredients);
        setPrice(tempPrice);
    }, []);

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    };

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data');
    };

    return (
        <div>
            <CheckoutSummary
                ingredients={ingredients}
                checkoutCancelledHandler={checkoutCancelledHandler}
                checkoutContinuedHandler={checkoutContinuedHandler}
            />
            <Route
                path={props.match.path + '/contact-data'}
                render={() => (<ContactData ingredients={ingredients} price={price}/>)}
            />
        </div>);
};

export default Checkout;