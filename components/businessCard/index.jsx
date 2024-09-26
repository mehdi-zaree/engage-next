import React from 'react';
import Image from "next/image";

function Index({img,heading,description,boxes}) {
    return (
        <div className={'w-full flex flex-col gap-5  '}>
            <div className={'w-full h-64 rounded-3xl overflow-hidden hover:scale-105 hover:rotate-6 duration-200'}>
                <Image src={img} className={'w-full h-full object-cover'} width={1000} height={1000} alt={'business-image'} />
            </div>
            <div className={'flex flex-col gap-4  '}>
                <h2 className={'w-full border-b-2 h-12 capitalize text-3xl font-semibold'}>{heading}</h2>
                <p className={'capitalize text-gray-400'}>{description}</p>
            </div>
            <div className={'flex gap-2'}>
                {boxes.map((box,index)=>{
                    return <span className={'rounded-full p-4 h-10 flex items-center justify-center capitalize font-bold '} style={{backgroundColor:box.bgColor}}>{box.text}</span>
                })}
            </div>
        </div>
    );
}

export default Index;
