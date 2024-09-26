import React, {useRef} from 'react';
import {useScroll, useTransform} from "framer-motion";
import Button from "@/components/normalButton/Button";
import ParallaxImage from "@/components/parallaxImage";
import {motion} from "framer-motion";

function Index(props) {
    const containerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    })

    const textOpacity = useTransform(scrollYProgress,[.4 ,1 ], [0,1])
    const scale1 = useTransform(scrollYProgress,[0,.9],[1,.4])
    const scale2 = useTransform(scrollYProgress,[0,.9],[1,.6])
    const scale3 = useTransform(scrollYProgress,[0,.9],[1,.5])
    const scale4 = useTransform(scrollYProgress,[0,.9],[1,.8])
    const scale5 = useTransform(scrollYProgress,[0,.9],[1,.4])
    const scale6 = useTransform(scrollYProgress,[0,.9],[1,.8])
    const scale7 = useTransform(scrollYProgress,[0,.9],[1,.4])
    const scale8 = useTransform(scrollYProgress,[0,.9],[1,.8])

    const x1 = useTransform(scrollYProgress,[0,.9],[0,-300])
    const y1 = useTransform(scrollYProgress,[0,.9],[0,-300])
    const x2 = useTransform(scrollYProgress,[0,.9],[0,-400])
    const y2 = useTransform(scrollYProgress,[0,.9],[0,-100])
    const x3 = useTransform(scrollYProgress,[0,.9],[0,-400])
    const y3 = useTransform(scrollYProgress,[0,.9],[0,150])
    const x4 = useTransform(scrollYProgress,[0,.9],[0,-100])
    const y4 = useTransform(scrollYProgress,[0,.9],[0,250])
    const x5 = useTransform(scrollYProgress,[0,.9],[0,200])
    const y5 = useTransform(scrollYProgress,[0,.9],[0,-270])
    const x6 = useTransform(scrollYProgress,[0,.9],[0,450])
    const y6 = useTransform(scrollYProgress,[0,.9],[0,-190])
    const x7 = useTransform(scrollYProgress,[0,.9],[0,370])
    const y7 = useTransform(scrollYProgress,[0,.9],[0,0])
    const x8 = useTransform(scrollYProgress,[0,.9],[0,400])
    const y8 = useTransform(scrollYProgress,[0,.9],[0,200])


    return (
        <>
            <section ref={containerRef} className={'w-full h-[350vh]  my-20'}>
                <div className={'w-full h-[100vh] sticky top-10  flex items-center justify-center'}>
                    <div className={'w-1/2  flex items-center justify-center flex-col'}>
                        <motion.div
                            className={'w-full flex flex-col items-center gap-5'}
                            style={{
                                opacity: textOpacity
                            }}
                        >
                            <div

                                className={'w-4/5 h-full  flex text-5xl flex-col justify-center items-center font-semibold '}>
                                <h2 className={'text-center'}>Transform </h2>
                                <h2>engagement into real</h2>
                                <div className={'flex'}>
                                    <img className={'w-12 h-12'} src="/victory-hand.webp" alt=""/>
                                    <span>clients</span>
                                </div>
                            </div>
                            <Button text={'sign up for a demo'} style={`text-md p-5`}/>
                        </motion.div>
                        <div className={'w-full    absolute top-[35%] flex items-center justify-center -translate-y-1/2'}>
                            <div className={'absolute  -translate-y-1/2 left-[42.5%]  '}>
                                <ParallaxImage  img={'/nigga-girl.webp'} scaleTransform={scale1} x={x8} y={y8}/>
                                <ParallaxImage  img={'/happy-yellow-man.webp'} scaleTransform={scale2} x={x7} y={y7}/>
                                <ParallaxImage  img={'/nigga-man.webp'} scaleTransform={scale3} x={x6} y={y6}/>
                                <ParallaxImage  img={'/curly-nigga.webp'} scaleTransform={scale4} x={x5} y={y5}/>
                                <ParallaxImage  img={'/green-blondy.webp'} scaleTransform={scale5} x={x4} y={y4}/>
                                <ParallaxImage  img={'/nigga-purple-man.webp'} scaleTransform={scale6} x={x3} y={y3}/>
                                <ParallaxImage  img={'/yellow-nigga.webp'} scaleTransform={scale7} x={x2} y={y2}/>
                                <ParallaxImage  img={'/ginger-girl.webp'} scaleTransform={scale8} x={x1} y={y1}/>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
}

export default Index;