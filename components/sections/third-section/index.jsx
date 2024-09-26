'use client'
import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import {motion, useScroll} from "framer-motion";
import Card from "@/components/card";
import CardData from '/data/cardData'

function Index() {

    const containerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

    return (
        <>
            <section className={'w-full relative h-[360vh]'} ref={containerRef}>
                <div className={'w-full mx-auto   flex items-center'}>
                    <marquee behavior="alternate" direction="rtl" loop={-1} width={'100%'}>
                        <div className={'w-full flex justify-evenly gap-52'}>
                            <Image src={'/logo-ipsum.svg'} alt={'logo'} width={100} height={100}/>
                            <Image src={'/logoIpsum1.svg'} alt={'logo1'} width={100} height={100}/>
                            <Image src={'/logo-ipsum2.svg'} alt={'logo2'} width={100} height={100}/>
                            <Image src={'/logo-ipsum3.svg'} alt={'logo3'} width={100} height={100}/>
                            <Image src={'/logo-ipsum4.svg'} alt={'logo4'} width={100} height={100}/>
                            <Image src={'/logo-ipsum6.svg'} alt={'logo6'} width={100} height={100}/>
                            <Image src={'/logo-ipsum7.svg'} alt={'logo6'} width={100} height={100}/>
                            <Image src={'/logo-ipsum.svg'} alt={'logo'} width={100} height={100}/>
                            <Image src={'/logoIpsum1.svg'} alt={'logo1'} width={100} height={100}/>
                            <Image src={'/logo-ipsum2.svg'} alt={'logo2'} width={100} height={100}/>
                            <Image src={'/logo-ipsum3.svg'} alt={'logo3'} width={100} height={100}/>
                            <Image src={'/logo-ipsum4.svg'} alt={'logo4'} width={100} height={100}/>
                            <Image src={'/logo-ipsum6.svg'} alt={'logo6'} width={100} height={100}/>
                            <Image src={'/logo-ipsum7.svg'} alt={'logo6'} width={100} height={100}/>
                        </div>
                    </marquee>
                </div>
                <div className={'w-full h-full justify-evenly items-center px-10  my-32 flex flex-col gap-52'}

                >
                    {cardData.map((card, index) => {
                        const targetScale = 1 - ((cardData.length - index) * 0.05)
                       return <Card {...card} key={index} index={index} range={[index * 0.33,1]} targetScale={targetScale} progress={scrollYProgress}/>
                    })}
                </div>
            </section>
        </>
    );
}

export default Index;
