import React, { useState } from 'react';

function Form({ actionUrl, method, id = null, classes = [], children = [], Submitfun}) {
    const [formError, setFormError] = useState(null);

    return (
        <form action={actionUrl} method={method} id={id} className={classes.join(" ")} onSubmit={(e)=> Submitfun(e,setFormError)}>
            {formError && <span>{formError}</span>}
            {children}
        </form>
    );
}

export default Form;
