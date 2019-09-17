import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.sass'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = ({open, close}) => {
    const attachedClasses = [classes.SideDrawer];
    if(open){
        attachedClasses.push(classes.Open);
    } else {
        attachedClasses.push(classes.Close);
    }
    return (
        <>
            <Backdrop show={open} clicked={close}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height='5%'/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;