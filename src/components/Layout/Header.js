import React from 'react'

import classes from './Header.module.css'

const Header = (props) =>
{
    return (
        <>
            <header>
                <h1>Meals R Us</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src="../../assets/meals.jpg" alt="A meal" />
            </div>
        </>
    )
}

export default Header