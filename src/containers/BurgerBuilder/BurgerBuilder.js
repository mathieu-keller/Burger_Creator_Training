import React, {useState} from 'react';
import Burger from '../../components/Burger/Burger'

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState({
        cheese: 1,
        meat: 1
    });
    return (
        <>
            <Burger ingredients={ingredients}/>
            <div>Build Controls</div>
        </>
    );
};

export default BurgerBuilder;