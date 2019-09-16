import React from 'react';
import classes from './BuildControl.module.sass'

const buildControl = ({label, added, remove, disable}) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button disabled={disable} onClick={remove} className={classes.Less}>Less</button>
        <button onClick={added} className={classes.More}>More</button>
    </div>
);

export default buildControl;