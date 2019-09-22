import React from 'react';
import Burger from "../../Burger/Burger";
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.sass'
import {Route, withRouter} from "react-router-dom";

const CheckoutSummary = props => (
    <div className={classes.CheckoutSummary}>
        <h1>I will tastes it!</h1>
        <div style={{width: '100%', margin: 'auto'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Route
            path={props.match.path}
            exact
            render={() => (
                <><Button
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
                </>)}
        />

    </div>
);

export default withRouter(CheckoutSummary);