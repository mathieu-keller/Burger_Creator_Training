import React, {useEffect, useState} from 'react';
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    const WithErrorHandler = props => {
        const [error, setError] = useState(null);
        useEffect(() => {
            axios.interceptors.request.use(req => {
                setError(null);
                return req;
            });
            axios.interceptors.response.use(res=> res, error => {
                if (error) {
                    setError(error);
                }
            })
        }, []);
        return (
            <>
                <Modal show={error !== null}
                       modalClosed={() => setError(null)}>{error !== null ? error.message : null}</Modal>
                <WrappedComponent {...props}/>
            </>)
    };
    return WithErrorHandler;
};

export default withErrorHandler;