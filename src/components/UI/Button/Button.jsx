import React from 'react'

import LoadingGIF from "../../../../public/img/loader2.gif";
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
                        <img src={LoadingGIF} />
                    </div>) 
                : 
                    title
            }
        </button>
    );
}

export default Button;
