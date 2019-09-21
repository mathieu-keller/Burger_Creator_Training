import React, {useState} from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.sass"
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";
import {withRouter} from "react-router-dom";

const ContactData = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState({
        street: '',
        postalCode: ''
    });
    const [loading, setLoading] = useState(false);

    const orderHandler = e => {
        e.preventDefault();
        setLoading(true);
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            customer: {
                lastName: 'Müller',
                street: 'Neuer Jungfernstieg 20',
                city: 'Hamburg'
            },
            deliveryTime: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(() => props.history.push('/'))
            .catch(e => {
                setLoading(false);
                console.log(e);
            });
        console.log(props.ingredients)
    };

    let form = (
        <form>
            <input className={classes.Input} type='text' name='name' placeholder='Your name'/>
            <input className={classes.Input} type='email' name='email' placeholder='Your email'/>
            <input className={classes.Input} type='text' name='street' placeholder='Your street'/>
            <input className={classes.Input} type='text' name='postal' placeholder='Your postal code'/>
            <Button type='Success' clicked={orderHandler}>ORDER</Button>
        </form>
    );
    if (loading) {
        form = <Spinner/>
    }

    return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
    );
};

export default withRouter(ContactData);