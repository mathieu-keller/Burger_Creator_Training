import React from 'react';
import classes from './Toolbar.module.sass'
import Logo from  '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const toolbar = ({openSideDrawer}) => (
    <header className={classes.Toolbar}>
        <DrawerToggle onClick={openSideDrawer} />
        <Logo height='80%' />
        <nav className={classes.DesktopOnly}>
           <NavigationItems />
        </nav>
    </header>
);

export default toolbar;