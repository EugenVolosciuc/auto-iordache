import React from 'react'
import { isEmpty } from 'lodash'

const Input = ({ inputClassName = '', labelClassName = '', inputType = "text", name, label, inputref, error = {} }) => {
    return (
        <div className='input-group'>
            <input className={inputClassName} type={inputType} name={name} ref={inputref} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className={labelClassName} htmlFor={name}>{label}</label>
            {!isEmpty(error) && <p className="text-red-400">{error.message}</p>}
        </div>
    )
}

export default Input