import React from 'react';
import {motion} from 'framer-motion';

function ParallaxImage({img,scaleTransform,x,y}) {
    return (
        <motion.div
            className={'w-64 h-64 rounded-[42px] overflow-hidden absolute '}
            style={{
                scale: scaleTransform,
                x:x,
                y:y
            }}
        >

            <img src={img} alt="" className={'w-full h-full object-cover'}/>
        </motion.div>
    );
}

export default ParallaxImage;
