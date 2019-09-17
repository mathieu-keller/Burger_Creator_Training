import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.sass'
const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='nice looking burger'/>
    </div>
);

export default logo;