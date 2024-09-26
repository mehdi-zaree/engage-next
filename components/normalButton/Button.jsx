import React from 'react';

function Button({text,style}) {
    return (
        <button className={`${style} text-white font-bold  bg-black rounded-full shadow-2xl lg:flex justify-center items-center hover:scale-105 hover:rotate-6 duration-200`}  >
            {text}
        </button>
    );
}

export default Button;
