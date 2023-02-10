import React from 'react'

import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'

const Header = (props) =>
{
    return (
        <>
            <header>
                <h1>Meals R Us</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={meals} />
            </div>
        </>
    )
}

export default Header