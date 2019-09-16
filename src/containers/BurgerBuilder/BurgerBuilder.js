import React, {useState} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
    const [purchasable, setPurchasable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);

    const updatePurchaseState = newIngredients => {
        const ingredientsCount = Object.keys(newIngredients)
            .map(key => newIngredients[key])
            .reduce((a, b) => a + b, 0);
        setPurchasable(ingredientsCount > 0);
    };

    const addIngredientHandler = type => {
        const oldCount = ingredients[type] ? ingredients[type] : 0;
        const stateCopy = {...ingredients};
        stateCopy[type] = oldCount + 1;
        setIngredients(stateCopy);
        setPrice(price + INGREDIENT_PRICES[type]);
        updatePurchaseState(stateCopy);
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
        updatePurchaseState(stateCopy);
    };

    return (
        <>
            <Modal show={purchasing} modalClosed={() => setPurchasing(false)}>
                <OrderSummary ingredients={ingredients} price={price}/>
            </Modal>
            <Burger ingredients={ingredients}/>
            <BuildControls
                price={price}
                ingredients={ingredients}
                ingredientAdded={addIngredientHandler}
                ingredientRemove={removeIngredientHandler}
                purchasable={purchasable}
                ordered={() => setPurchasing(true)}
            />
        </>
    );
};

export default BurgerBuilder;