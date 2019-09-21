import React from 'react';
import classes from './Order.module.sass'

const Order = ({ingredients, price}) => {
    const ingredientsOutput = Object.keys(ingredients).map(key => (
        <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={key}> {key} ({ingredients[key]})</span>));
    return (
        <div className={classes.Order}>
            <p>Ingredients:{ingredientsOutput}</p>
            <p>Price: <strong>{Number.parseFloat(price).toFixed(2)} €</strong></p>
        </div>
    )
};

export default Order;