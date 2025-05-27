import React from 'react';

const Card = ({ title, children, className = '' }) => {
    return (
        <div className={`bg-white shadow-md rounded-2xl p-6 ${className}`}>
            {title && <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>}
            {children}
        </div>
    );
};

export default Card;