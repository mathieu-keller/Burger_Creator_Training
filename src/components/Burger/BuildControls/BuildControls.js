import React from 'react';
import classes from './BuildControls.module.sass'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = ({ingredientAdded, ingredientRemove, ingredients}) => (
    <div className={classes.BuildControls}>
        {controls.map(control => <BuildControl
            key={control.label}
            label={control.label}
            disable={ingredients[control.type] === undefined}
            added={() => ingredientAdded(control.type)}
            remove={() => ingredientRemove(control.type)}/>)}
    </div>
);

export default buildControls;