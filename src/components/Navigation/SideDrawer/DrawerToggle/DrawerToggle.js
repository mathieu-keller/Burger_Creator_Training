import React from 'react';
import classes from './DrawerToggle.module.sass'
const drawerToggle = ({onClick}) => (
    <div className={classes.DrawerToggle} onClick={onClick}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;