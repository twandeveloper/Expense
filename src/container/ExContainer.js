import React from 'react'
import Account from '../components/Account/Account'

import './ExContainer.module.css'
import classes from './ExContainer.module.css'

export default function ExContainer(props) {
    return (
        <div className={classes.ExContainer}>
            <h1>expense tracker</h1>
            <br/>
            <h2>Balance</h2>
            <h3>$ {props.balance}</h3>
            <br/>
            <Account/>
            <br/>
            <h3>history component</h3>
            <br/>
            <h3>add income or expense</h3>
        </div>
    )
}
