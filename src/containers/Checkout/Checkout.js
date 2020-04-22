import React from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {connect} from "react-redux";
import {Route} from "react-router-dom";

const Checkout = props => {
    const checkoutCancelledHandler = () => {
        props.history.goBack();
    };

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data');
    };

    return (
        <div>
            <CheckoutSummary
                ingredients={props.ingredients}
                price={props.price}
                checkoutCancelledHandler={checkoutCancelledHandler}
                checkoutContinuedHandler={checkoutContinuedHandler}
            />
            <Route
                path={props.match.path + '/contact-data'}
                render={() => (<ContactData price={props.price}/>)}
            />
        </div>);
};

const stateMapToProps = state => ({
    ingredients: state.ingredients,
    price: state.price
});

export default connect(stateMapToProps)(Checkout);