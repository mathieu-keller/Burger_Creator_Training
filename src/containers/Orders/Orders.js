import React, {useEffect, useState} from 'react';
import Order from '../../components/Order/Order'
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('/orders.json')
            .then(res => setOrders(res.data))
            .finally(() => setLoading(false));
    }, []);

    let ordersArray = <Spinner/>;

    if (!loading) {
        if (orders) {
            ordersArray = Object.keys(orders)
                .map(key => (<Order
                        key={key}
                        ingredients={orders[key].ingredients}
                        price={orders[key].price}/>
                ));
        } else {
            ordersArray = <p>No Data</p>
        }
    }
    return (
        <div>
            {ordersArray}
        </div>
    );
};

export default withErrorHandler(Orders, axios);