import React from 'react';
import Burger from "../../Burger/Burger";
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.sass'

const CheckoutSummary = props => (
    <div className={classes.CheckoutSummary}>
        <h1>I will tastes it!</h1>
        <div style={{width: '100%', margin: 'auto'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <p>Price: <strong>{props.price.toFixed(2)}€</strong></p>
<Button
                    type='Danger'
                    clicked={props.checkoutCancelledHandler}
                >CANCEL
                </Button>
                    <Button
                        type='Success'
                        clicked={props.checkoutContinuedHandler}
                        disabled={!props.ingredients || Object.keys(props.ingredients).length <= 0}
                    >CONTINUE
                    </Button>


    </div>
);

export default CheckoutSummary;
