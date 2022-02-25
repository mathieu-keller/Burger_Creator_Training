import React from 'react';
import classes from './NavigationItem.module.sass'
import {NavLink} from "react-router-dom";

const navigationItem = ({link, active, children}) => (
    <li className={classes.NavigationItem}>
        <NavLink to={link} className={({ isActive }) => isActive ? classes.Active : ""} end>
            {children}
        </NavLink>
    </li>
);

export default navigationItem;
