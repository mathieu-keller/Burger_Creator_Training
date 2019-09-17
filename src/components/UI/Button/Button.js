import React from 'react';
import classes from './Button.module.sass'

const button = ({type, clicked, children}) => (
    <button
        className={[classes.Button, classes[type]].join(' ')}
        onClick={clicked}>
        {children}
    </button>
);

export default button;