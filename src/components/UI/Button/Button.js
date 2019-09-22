import React from 'react';
import classes from './Button.module.sass'

const button = ({type, clicked, disabled, children}) => (
    <button
        className={[classes.Button, classes[type]].join(' ')}
        onClick={clicked}
        disabled={disabled}>
        {children}
    </button>
);

export default button;