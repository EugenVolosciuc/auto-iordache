import React from 'react'

const Button = ({ btnType = 'primary', htmlType = "button", children, className = '', style = {},  onClick = () => {}}) => {
    const getBtnTypeStyling = () => {
        switch (btnType) {
            case 'primary':
                return 'py-2 px-6 bg-main text-white border-0'
            case 'default':
                return 'py-2 px-6 bg-white text-main border-main'
            case 'link':
                return 'py-0 px-0 m-0 bg-transparent text-main border-0'
        }
    }

    return (
        <button 
            style={style}
            onClick={onClick}
            className={`font-medium text-xl rounded-full ${getBtnTypeStyling()} ${className}`}
            type={htmlType}>
            {children}
        </button>
    )
}

export default Button