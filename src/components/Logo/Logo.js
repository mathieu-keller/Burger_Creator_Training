import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.sass'

const logo = ({height}) => (
    <div className={classes.Logo} style={{height}}>
        <img src={burgerLogo} alt='nice looking burger'/>
    </div>
);

export default logo;