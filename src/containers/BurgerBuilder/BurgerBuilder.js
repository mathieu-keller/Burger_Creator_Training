import React, {useEffect, useState} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from "react-redux";
import {ADD_INGREDIENTS, DEL_INGREDIENTS, SET_INGREDIENTS} from "../../store/reducer";


const BurgerBuilder = props => {
    const [purchasable, setPurchasable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);
    const [request, setRequest] = useState(false);

    useEffect(() => {
        if (!request) {
            axios.get('https://i-need-a-burger.firebaseio.com/ingredients.json')
                .then(res => {
                    props.setIngredients(res.data);
                    updatePurchaseState();
                })
                .finally(() => setRequest(true));
        }
    });

    const updatePurchaseState = () => {
        const ingredientsCount = Object.keys(props.ingredients)
            .map(key => props.ingredients[key])
            .reduce((a, b) => a + b, 0);
        setPurchasable(ingredientsCount > 0);
    };

    const addIngredientHandler = type => {
        props.addIngredients(type);
        updatePurchaseState(props.ingredients);
    };

    const removeIngredientHandler = type => {
        props.delIngredients(type);
        updatePurchaseState();
    };

    const purchaseContinueHandler = () => {
        props.history.push('/checkout');
    };
    let burger = <Spinner/>;
    let orderSummery = null;
    if (props.ingredients) {
        orderSummery = <OrderSummary ingredients={props.ingredients}
                                     price={props.price}
                                     purchaseCanceled={() => setPurchasing(false)}
                                     purchaseContinued={purchaseContinueHandler}/>;
        burger = <>
            <Burger ingredients={props.ingredients}/>
            <BuildControls
                price={props.price}
                ingredients={props.ingredients}
                ingredientAdded={addIngredientHandler}
                ingredientRemove={removeIngredientHandler}
                purchasable={purchasable}
                ordered={() => setPurchasing(true)}
            />
        </>;
    }


    return (
        <>
            <Modal show={purchasing} modalClosed={() => setPurchasing(false)}>
                {orderSummery}
            </Modal>
            {burger}
        </>
    );
};

const actionMapToProps = dispatch => ({
    setIngredients: ingredients => dispatch({type: SET_INGREDIENTS, payload: ingredients}),
    addIngredients: ingredient => dispatch({type: ADD_INGREDIENTS, payload: ingredient}),
    delIngredients: ingredient => dispatch({type: DEL_INGREDIENTS, payload: ingredient}),
});

const stateMapToProps = state => ({
    ingredients: state.ingredients,
    price: state.price
});

export default withErrorHandler(connect(stateMapToProps, actionMapToProps)(BurgerBuilder), axios);