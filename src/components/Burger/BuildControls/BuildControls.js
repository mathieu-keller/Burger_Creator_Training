import React from 'react';
import classes from './BuildControls.module.sass'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = ({ingredientAdded, ingredientRemove, ingredients, price, purchasable, ordered}) => (
    <div className={classes.BuildControls}>
        <p>Price: <strong>{price.toFixed(2)}€</strong></p>
        {controls.map(control => <BuildControl
            key={control.label}
            label={control.label}
            disable={ingredients[control.type] === undefined}
            added={() => ingredientAdded(control.type)}
            remove={() => ingredientRemove(control.type)}/>)}
        <button
            className={classes.OrderButton}
            disabled={!purchasable}
            onClick={ordered}
        >Order Now!
        </button>
    </div>
);

export default buildControls;