import React from 'react'
import "../css/Button.css"

function Button({ title, classes=[], isDisabled=false }) {
    let ButtonAttributes = {
        className: classes.join(' '),
        disabled: isDisabled
    }
    return (
        <button { ...ButtonAttributes } >{ title }</button>
    )
}

export default Button
