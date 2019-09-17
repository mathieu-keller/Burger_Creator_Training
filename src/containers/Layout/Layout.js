import React, {useState} from 'react';
import classes from './Layout.module.sass'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const Layout = ({children}) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    return (
        <>
            <Toolbar openSideDrawer={() => setShowSideDrawer(true)}/>
            <SideDrawer open={showSideDrawer} close={() => setShowSideDrawer(false)}/>
            <main className={classes.Content}>{children}</main>
        </>);
};

export default Layout;