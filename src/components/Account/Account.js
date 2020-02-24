import React from 'react'
import classes from './Account.module.css'

export default function Account() {
    return (
        <div className={classes.Account}>
            <div className={classes.item}>
                <h3>income: $900</h3>
            </div>
            <div className={classes.item}>
                <h3>expense: $300</h3>
            </div>
            
            {/* <h3 className={classes.item}>expense</h3> */}
        </div>
    )
}
