import React from 'react';
import Button from "../../UI/Button/Button";

const orderSummary = ({ingredients, price, purchaseCanceled, purchaseContinued}) => {
    const ingredientSummary = Object.keys(ingredients)
        .map(key => (
            <li key={key}>
                <span style={{textTransform: 'capitalize'}}>
                    {key}
                </span>:
                {ingredients[key]}
            </li>));
    return (
        <>
            <h3>Your Order</h3>
            <p>Your OWN Burger! with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Price: <strong>{price.toFixed(2)}</strong>€</p>
            <Button clicked={purchaseCanceled} type='Danger'>CANCEL</Button>
            <Button clicked={purchaseContinued} type='Success'>CONTINUE</Button>
        </>
    );
};

export default orderSummary;