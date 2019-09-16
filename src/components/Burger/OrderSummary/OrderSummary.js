import React from 'react';

const orderSummary = ({ingredients,price}) => {
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
        </>
    );
};

export default orderSummary;