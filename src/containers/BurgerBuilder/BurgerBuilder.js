import React, {useState} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js'
const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState({});
    return (
        <>
            <Burger ingredients={ingredients}/>
            <BuildControls />
        </>
    );
};

export default BurgerBuilder;