import React, {useEffect, useState} from 'react';
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    const WithErrorHandler = props => {
        const [error, setError] = useState(null);
        const [requestInterceptor] = useState(axios.interceptors.request.use(req => {
            setError(null);
            return req;
        }));
        const [responseInterceptor] = useState(axios.interceptors.response.use(res => res, error => {
            if (error) {
                setError(error);
            }
        }));
        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(requestInterceptor);
                axios.interceptors.response.eject(responseInterceptor);
            };
            // add never changed props in input because react will give a waring that the used props in useeffect can be undefind
        }, [requestInterceptor, responseInterceptor]);
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