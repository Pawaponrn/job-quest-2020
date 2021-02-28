import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Input({changeResultNumber, changeUserName}) {
    const [input, setInput] = useState('');

    function onChange(event) {
        setInput(event.target.value)
    }

    function onKeyDown(event) {
        const data = event.target.value

        if (event.key === 'Enter' && data && changeResultNumber) {
            changeResultNumber(data);
        }

        if (event.key === 'Enter' && data && changeUserName) {
            changeUserName(data);
        }
    }

    return (
        <input 
            className="input-number"
            type="text"
            value={input}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
}

Input.prototype = {
    changeResultNumber : PropTypes.func.isRequired
}

export default Input;