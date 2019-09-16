import React, {useState} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const BurgerBuilder = () => {
    const basePrice = 4;
    const [ingredients, setIngredients] = useState({});
    const [price, setPrice] = useState(basePrice);

    const addIngredientHandler = type => {
        const oldCount = ingredients[type] ? ingredients[type] : 0;
        const stateCopy = {...ingredients};
        stateCopy[type] = oldCount + 1;
        setIngredients(stateCopy);
        setPrice(price + INGREDIENT_PRICES[type]);
    };

    const removeIngredientHandler = type => {
        const oldCount = ingredients[type] ? ingredients[type] : 0;
        const newCount = oldCount - 1 > 0 ? oldCount - 1 : 0;
        const stateCopy = {...ingredients};
        if (newCount === 0) {
            delete stateCopy[type];
        } else {
            stateCopy[type] = newCount;
        }
        setIngredients(stateCopy);
        if (oldCount !== newCount) {
            let newPrice = price - INGREDIENT_PRICES[type];
            if (newPrice < basePrice) {
                newPrice = basePrice;
            }
            setPrice(newPrice);
        }
    };

    return (
        <>
            <Burger ingredients={ingredients}/>
            <BuildControls
                price={price}
                ingredients={ingredients}
                ingredientAdded={addIngredientHandler}
                ingredientRemove={removeIngredientHandler}/>
        </>
    );
};

export default BurgerBuilder;