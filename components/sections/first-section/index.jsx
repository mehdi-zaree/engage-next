'use client'
import Image from "next/image";
import Button from "@/components/normalButton/Button";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCards} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';
import '/app/globals.css'

function Index(props) {
    return (
        <section className={'w-full  p-16'}>
            <div className={'w-full items-center flex flex-col gap-16 '}>
                <div>
                    <div className={'  flex justify-center items-center  '}>
                        <h1 className={"font-semibold text-8xl flex flex-col items-center"}>
                            Say goodbye
                        </h1>
                        <Image src={'/hand-shake.webp'} alt={'hand-shake'} className={'w-14 h-14'} width={100}
                               height={0}/>
                        <br/>
                    </div>
                    <div className={' flex items-center justify-center font-semibold -translate-x-[60px] '}>
                        <div
                            className={'w-32 h-12 rounded-full bg-white outline flex items-center justify-center outline-2 outline-black translate-x-[300px] translate-y-[30px] '}>
                            Really 1990's
                        </div>
                        <h2 className={'text-8xl '}>
                            to old marketing
                        </h2>
                    </div>
                </div>
                <Button text={'sign up for a demo'} style={`w-[200px] h-16 text-xl`}/>
            </div>
            <div className={'my-20'}>
                <Swiper
                    effect={'cards'}
                    grabCursor={false}
                    modules={[EffectCards,Autoplay]}
                    className="mySwiper w-[400px] h-[600px]"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className={'h-full  rounded-2xl bg-white'}>
                        <Image src={'/bg-green.webp'} width={2000} alt={'bg-green'} height={2000}
                               className={'w-full h-full'}/>
                    </SwiperSlide>
                    <SwiperSlide className={'h-full rounded-2xl '}>
                        <Image src={'/bg-yellow.webp'} width={2000} alt={'bg-yellow'} height={2000}
                               className={'w-full h-full'}/>
                    </SwiperSlide>
                    <SwiperSlide className={'h-full rounded-2xl bg-black'}>
                        <Image src={'/bg-purple.webp'} width={2000} alt={'bg-purple'} height={2000} className={'w-full h-full'}/>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
}

export default Index;