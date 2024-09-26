import React from 'react';
import Button from "@/components/normalButton/Button";
import SolutionCard from "@/components/solutionCard";

function Index(props) {
    return (
        <section className={'w-full  my-72   flex flex-col gap-20 px-52   '}>
            <div className={'flex justify-between  items-center'}>
                <h2 className={'capitalize text-6xl font-semibold'}>Our solutions</h2>
                <Button text={'view all solutions'} style={`p-4`}/>
            </div>
            <div className={'grid grid-cols-3 grid-rows-2 gap-8 my-20 '}>
                <SolutionCard
                    text={'Crafting a compelling brand identity and positioning strategy'} bgcolor={`#c6b6ff`}
                    img={false}/>
                
                <div className={'w-full h-full col-span-2 bg-[#c7d8c4] rounded-2xl overflow-hidden'}>
                    <img src="/smiling-nigga.webp" alt="" className={'w-full h-full '}/>
                </div>
                
                <SolutionCard
                    bgImage={'/ring.webp'} text={'Developing data-driven campaigns across platforms'}
                    bgcolor={'#fde68a'} img={true}/>
                <SolutionCard
                    bgcolor={'#c8e7ff'}
                    text={'Producing high-quality content that aligns with SEO best practices'}
                    img={true}
                    bgImage={'/man-with-laptop.webp'}
                />
                <SolutionCard
                    bgcolor={'#c6b6ff'}
                    text={'Managing and optimizing social media channels to build engagement'}
                    img={true}
                    bgImage={'/smiling-woman.webp'}
                />
            </div>


        </section>
    );
}

export default Index;
