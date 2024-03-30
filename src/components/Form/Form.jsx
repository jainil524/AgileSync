import React, { useState } from 'react';

function Form({ actionUrl, method, id = null, classes = [], children = [], Submitfun}) {
    const [formError, setFormError] = useState(null);

    return (
        <form action={actionUrl} method={method} id={id} className={classes.join(" ")} onSubmit={(e)=> Submitfun(e,setFormError)}>
            {formError && <p style={{"color":"red","padding":".6rem 0 1rem 0"}}>{formError}</p>}
            {children}
        </form>
    );
}

export default Form;
