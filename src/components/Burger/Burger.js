import React from 'react';
import classes from './Burger.module.sass'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const getIngredients = ingredients => {
    let transformedIngredients = Object.keys(ingredients)
        .map(key => {
            return [...Array(ingredients[key])]
                .map((_, i) => <BurgerIngredient key={key + i} type={key}/>)
        });
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add some ingredients!</p>
    }
    return transformedIngredients;
};

const burger = ({ingredients}) => (
    <div className={classes.Burger}>
        <BurgerIngredient type='bread-top'/>
        {getIngredients(ingredients)}
        <BurgerIngredient type='bread-bottom'/>
    </div>
);

export default burger;
