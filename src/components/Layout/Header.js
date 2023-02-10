import React from 'react'

import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'

const Header = (props) =>
{
    return (
        <>
            <header>
                <h1>Meals R Us</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={mealsImage} />
            </div>
        </>
    )
}

export default Header