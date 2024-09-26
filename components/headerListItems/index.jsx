"use client"
import React from 'react';
import {motion} from 'framer-motion';
function Index({text}) {
    return (
        <motion.li
            className='rounded-2xl h-12  capitalize flex items-center justify-center p-5 font-bold cursor-pointer   hover:bg-[#c8e7ff] duration-100'
            whileHover={{scale:1.1,}}

            transition={{duration:.1}}
        >
            {text}
        </motion.li>
    );
}

export default Index;
