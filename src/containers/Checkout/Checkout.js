import React, {useEffect, useState} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

const Checkout = props => {
    const [ingredients, setIngredients] = useState({});

    useEffect(() => {
        const query = new URLSearchParams(props.location.search);
        const newIngredients = {};
        for (let param of query.entries()) {
            newIngredients[param[0]] = +param[1];
        }
        setIngredients(newIngredients);
    }, [props.location.search]);

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
        </div>);
};

export default Checkout;