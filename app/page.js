"use client"
import FirstSection from "@/components/sections/first-section";
import SecondSection from "@/components/sections/second-section";
import ThirdSection from "@/components/sections/third-section";
import FourthSection from "@/components/sections/fourth-section";
import Lenis from "lenis";
import {useEffect} from "react";
import FifthSection from "@/components/sections/fifth-section";
import SixthSection from "@/components/sections/sixth-section";


export default function Home() {
    useEffect(() => {
        const lenis = new Lenis()



        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, []);
    return (
        <div className="w-full">
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
        </div>
    );
}
