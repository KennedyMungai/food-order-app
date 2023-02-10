import React from 'react'

import classes from './Input.module.css'

const Input = (props) =>
{
    return (
        <div className={classes.input}>
            <label htmlFor="dynamic-input">
                {props.label}
            </label>
            <input type="text" id='dynamic-input' />
        </div>
    )
}

export default Input