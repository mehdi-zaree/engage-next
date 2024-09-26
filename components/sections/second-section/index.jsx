"use client"
import {useMotionValue, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import {motion} from "framer-motion";
import {useRef, useState} from "react";
import Image from "next/image";

function Index(props) {
    const [scroll, setScroll] = useState(null);
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ['start start', 'end end'],
    })
    useMotionValueEvent(scrollYProgress,'change',(latest)=>{
        setScroll(latest)
    })
    return (
        <>
            <section className={'w-full h-[400vh]  my-72 '} ref={ref} >
                <div className={' w-full h-[400px]  sticky top-32 left-0 flex flex-col justify-center items-center '}>
                    <div className={'header flex items-center justify-center gap-2'}>
                        <h2 className={'text-7xl font-semibold'}>We help you with </h2>
                        <Image src={'/bede-bere.webp'} width={70} height={70} alt={'bede bere'}/>
                    </div>
                    <div className={'services-container  flex flex-col items-center gap-3  w-1/2 h-1/2   my-20 relative'}>
                        <motion.div

                            initial={{scale: 0, rotate: 0}}
                            whileInView={{scale: scroll >0.25? 1:0 , rotate: 2}}
                            viewport={{once:true}}
                            className={' h-24 rounded-full flex items-center justify-center text-7xl p-14 bg-[#c6b6fc] capitalize text-[#312765] font-bold absolute '}>
                            social media
                        </motion.div>
                        <motion.div
                                    initial={{scale: 0, rotate: 0}}
                                    whileInView={{scale: scroll >0.50? 1:0, rotate:-5 }}
                                    viewport={{once:true}}
                                    className={' h-24 rounded-full flex items-center justify-center text-7xl p-14 bg-[#c8e6fd] capitalize text-[#082f49] font-bold absolute'}>
                            SEO
                        </motion.div>
                        <motion.div
                                    initial={{scale:0,rotate:0}}
                                    whileInView={{scale:scroll >0.75? 1:0,rotate:8}}
                                    viewport={{once:true}}
                                    className={' h-24 rounded-full flex items-center justify-center text-7xl p-14 bg-[#fde68a] capitalize text-[#451a05] font-bold absolute'}>
                            content
                        </motion.div>
                        <motion.div
                                    initial={{scale:0,rotate:0}}
                                    whileInView={{scale:scroll === 1? 1:0,rotate:-8}}
                                    viewport={{once:true}}
                                    className={' h-24 rounded-full flex items-center justify-center text-7xl p-14 bg-[#c7d8c5] capitalize text-[#2f442d] font-bold'}>
                            advertising
                        </motion.div>

                    </div>
                </div>
            </section>
        </>

    );
}

export default Index;
