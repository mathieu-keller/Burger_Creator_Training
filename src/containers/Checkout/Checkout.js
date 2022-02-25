import React, {useState} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {connect} from "react-redux";
import {useLocation, useNavigate} from 'react-router-dom';

const Checkout = props => {
  const [showContractData,setShowContractData] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
    const checkoutCancelledHandler = () => {
      navigate(-1);
    };
    const checkoutContinuedHandler = () => {
      setShowContractData(true);
    };
    if(location === undefined) return <></>;
    return (
        <div>
            <CheckoutSummary
                ingredients={props.ingredients}
                price={props.price}
                checkoutCancelledHandler={checkoutCancelledHandler}
                checkoutContinuedHandler={checkoutContinuedHandler}
            />
          {showContractData?<ContactData price={props.price}/>:null}
        </div>);
};

const stateMapToProps = state => ({
    ingredients: state.ingredients,
    price: state.price
});

export default connect(stateMapToProps)(Checkout);
