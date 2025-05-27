import React from 'react';

const Button = ({
    children,
    onClick,
    className = '',
    type = 'button',
    variant = 'primary',
}) => {
    const base =
        'rounded-xl font-semibold py-2 px-4 transition-transform duration-200 focus:outline-none hover:scale-105';

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        success: 'bg-green-600 text-white hover:bg-green-700',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
