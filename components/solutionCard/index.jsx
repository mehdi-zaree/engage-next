import React, {useState} from 'react';
import {motion} from 'framer-motion';
import Image from "next/image";
import {BsArrowRight} from "react-icons/bs";
import {AiOutlineMinus} from "react-icons/ai";

function Index({text, bgcolor, bgImage, img}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlipped = () => {
        setIsFlipped(!isFlipped);
    }
    return (
        <div className={' w-full flex items-center h-[500px]   '}>
            <div className={'flip-card w-full h-full '}>
                <motion.div
                    className={'flip-card-inner w-full h-full    '}
                    initial={{rotateY: 0}}
                    animate={{rotateY: isFlipped ? 180 : 0}}
                    transition={{
                        duration: 0.2,
                        animationDirection: 'normal',
                        damping: 300,
                        type: 'tween',
                        stiffness: 500
                    }}
                >
                    <div className={`flip-card-front  w-full h-full  rounded-2xl  flex flex-col justify-between`}
                         style={{backgroundColor: bgcolor}}>
                        <div className={'w-full px-8 py-8 flex flex-col gap-5'}>
                            <div className={'w-full flex justify-between '}>
                                <h4 className={'h-8 bg-white outline outline-2 outline-black rounded-full flex justify-center items-center p-2 capitalize font-semibold'}>solutions</h4>
                                <div>
                                    <Image src={'/little-boxes.svg'} alt={'items'} width={32} height={32}/>
                                </div>
                            </div>
                            <p className={'font-semibold text-xl'}>{text}</p>
                        </div>
                        <div className={'w-full h-1/2  relative rounded-b-2xl overflow-hidden '}>
                            {img && <img src={bgImage} alt="" className={'w-full h-full object-cover overflow-hidden'}/>}
                            <div
                                className={'bottom-shadow w-full h-1/2  absolute bottom-0 left-0 flex items-center justify-between px-8 cursor-pointer shadow-inset '}
                                onClick={handleFlipped}>
                                <span className={'flex capitalize font-bold text-white'}>
                                     discover solutions
                                </span>
                                <div
                                    className={'shadow-button w-14 h-14  rounded-full bg-white flex items-center justify-center  border-2 border-black [box-shadow: 12px 5px 0px 0px rgba(0,0,0);]'}>
                                    <BsArrowRight style={{fontSize: '24px', fontWeight: 'bold'}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`flip-card-back  w-full h-full  rounded-2xl  flex flex-col justify-between`}
                         style={{backgroundColor: bgcolor}}>
                        <div className={'w-full px-8 py-8 flex flex-col gap-5'}>
                            <div className={'w-full flex justify-between '}>
                                <h4 className={'h-8 bg-white outline outline-2 outline-black rounded-full flex justify-center items-center p-2 capitalize font-semibold'}>solutions</h4>
                                <div>
                                    <Image src={'/little-boxes.svg'} alt={'items'} width={32} height={32}/>
                                </div>
                            </div>
                            <p className={' text-md'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.
                            </p>
                        </div>
                        <div className={'w-full h-1/2  relative rounded-b-2xl overflow-hidden '}>

                            <div
                                className={'bottom-shadow w-full h-1/2  absolute bottom-0 left-0 flex items-center justify-between px-8 cursor-pointer shadow-inset '}
                                onClick={handleFlipped}>
                                <span className={'flex capitalize font-bold text-white'}>
                                     go back
                                </span>
                                <div
                                    className={'shadow-button w-14 h-14  rounded-full bg-white flex items-center justify-center  border-2 border-black [box-shadow: 12px 5px 0px 0px rgba(0,0,0);]'}>
                                    <AiOutlineMinus style={{fontSize: '24px', fontWeight: 'bold'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Index;

