import React from 'react';
import classes from './NavigationItem.module.sass'
import {NavLink} from "react-router-dom";

const navigationItem = ({link, active, children}) => (
    <li className={classes.NavigationItem}>
        <NavLink to={link} activeClassName={classes.Active} exact>
            {children}
        </NavLink>
    </li>
);

export default navigationItem;