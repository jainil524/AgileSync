// Input.jsx
import React, { useState } from 'react';
import "../css/Input.css";

function Input({ label = null, type, placeholder, id = null, change, classes = [], value, error=null }) {

    return (
        <div className="input-wrapper">
            {(id || label) && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={classes}
                value={value}
                onChange={(e)=> change(prev => e.target.value)}
            />
            {error!=null?<span className="error">{error}</span>:null}
        </div>
    );
}

export default Input;
