import React from 'react'
import { createPortal } from 'react-dom'

import classes from './Modal.module.css'

const Backdrop = props =>
{
    return (
        <div className={classes.backdrop}>

        </div>
    )
}

const ModalOverlay = props =>
{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) =>
{
    return (
        <>
            {createPortal(<Backdrop />)}
            {createPortal(<ModalOverlay />)}
        </>
    )
}

export default Modal