'use client'
import React from 'react';
import Image from "next/image";
import {useTransform,motion} from "framer-motion";

function Index({heading,title,boxText,img,bg,index,progress,range,targetScale}) {
    const scale = useTransform(progress,range,[1,targetScale])
    return (
        <motion.div
            className={` w-full h-full  sticky   rounded-3xl  flex ${index%2?'':'flex-row-reverse'}`}
            style={{ scale,top: `calc(5% + ${index * 40}px)`, backgroundColor:bg }}

        >
            <div
                className={`w-1/2 h-full  flex flex-col  justify-center items-center gap-5`}
            >
                <div className={'w-full '}>
                    <h3 className={'w-1/2 text-5xl font-bold mx-auto'}>{heading}</h3>
                    <span className={'flex w-fit h-8 mx-auto rounded-full bg-white text-black outline outline-2 outline-black font-semibold p-4 items-center justify-center -translate-x-[140px] -translate-y-4'}>{boxText}</span>
                </div>
                <p className={'w-1/2'}>{title}</p>
            </div>
            <div className={`w-1/2 h-full flex items-center justify-center `}>
                <img src={img} alt={'card'} className={'w-3/4 h-3/4 object-cover rounded-2xl'}/>
            </div>

        </motion.div>
    );
}

export default Index;
