// Button.jsx
import React from 'react'
import "../css/Button.css"

function Button({ title, classes = [], isDisabled = false, hasLoading = false}) {
    return (
        <button 
            className={classes.join(' ') + (hasLoading ? ' loading' : '')}
            disabled={isDisabled}
        >
            {
            hasLoading 
                ? 
                    (<div>
                        <img src="../../public/img/loader2.gif" />
                    </div>) 
                : 
                    title
            }
        </button>
    );
}

export default Button;
