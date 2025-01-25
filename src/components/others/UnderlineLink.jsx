import React from 'react';
import { NavLink } from 'react-router-dom';

const UnderlineLink = ({ to, text }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `group relative transition-all ${
                    isActive ? 'text-primary-light' : 'text-white'
                }`
            }
        >
            {({ isActive }) => (
                <>
                    <p>{text}</p>
                    <div
                        className={`h-1 ${
                            isActive ? 'w-full bg-primary-light' : 'w-0 bg-primary-light group-hover:w-full'
                        } transition-all duration-150`}
                    ></div>
                </>
            )}
        </NavLink>
    );
};

export default UnderlineLink;