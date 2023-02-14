import React from 'react'

import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
// import CartContext from '../../store/cart-context'

const Header = (props) =>
{
    return (
        <>
            <header className={classes.header}>
                <h1>Meals R Us</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img
                    src={mealsImage}
                    alt='A table full of delicious food'
                />
            </div>
        </>
    )
}

export default Header