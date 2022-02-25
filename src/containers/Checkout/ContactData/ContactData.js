import React, {useState} from 'react';
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.sass"
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import {connect} from "react-redux";
import {useNavigate} from 'react-router-dom';

const ContactData = props => {
    const [orderFrom, setOrderFrom] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Street'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false
        },
        city: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your City'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Zipcode'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
            },
            valid: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your Email'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [{value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'},]
            },
            value: 'fastest',
            validation: {},
            valid: true
        }
    });
    const [loading, setLoading] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const navigate = useNavigate();

    const orderHandler = e => {
        e.preventDefault();
        setLoading(true);
        const formData = {};
        Object.keys(orderFrom).map(key => formData[key] = orderFrom[key].value);
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            orderData: formData
        };
        axios.post('/orders.json', order)
            .then(() => navigate('/'))
            .catch(() => setLoading(false));
    };

    const checkValidity = (value, rules) => {
        let valid = true;
        if (rules.required && value.trim() === '') {
            valid = value.trim() !== '' && valid;
        }
        if (rules.minLength) {
            valid = value.length >= rules.minLength && value.replace(/\s+/g, '').length >= rules.minLength && valid;
        }
        if (rules.maxLength) {
            valid = value.length <= rules.maxLength && value.replace(/\s+/g, '').length <= rules.maxLength && valid;
        }
        return valid;
    };

    const inputChangedHandler = (e, inputId) => {
        const updatedOrderForm = {...orderFrom};
        const updatedOrderFormElement = {...updatedOrderForm[inputId]};
        updatedOrderFormElement.value = e.target.value;
        updatedOrderFormElement.valid = checkValidity(e.target.value, updatedOrderFormElement.validation);
        updatedOrderFormElement.toched = true;
        updatedOrderForm[inputId] = updatedOrderFormElement;
        setOrderFrom(updatedOrderForm);
        let isValid = true;
        Object.values(updatedOrderForm).map(form => isValid = form.valid && isValid);
        setFormIsValid(isValid);
    };

    const formInput = Object.keys(orderFrom).map(key => <Input key={key} {...orderFrom[key]}
                                                               changed={e => inputChangedHandler(e, key)}/>);
    const disableOrderButton = !formIsValid || !props.ingredients || Object.keys(props.ingredients).length <= 0;
    let form = (
        <form>
            {formInput}
            <Button type='Success' clicked={orderHandler} disabled={disableOrderButton}>ORDER</Button>
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

const stateMapToProps = state => ({
    ingredients: state.ingredients,
});

export default connect(stateMapToProps)(ContactData);
