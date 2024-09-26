import React from 'react';
import Button from "@/components/normalButton/Button";
import Image from "next/image";
import leadingBusinessData from "@/data/leadingBusiness";
import BusinessCard from "@/components/businessCard";


function Index(props) {
    return (
        <>
            <section className={'w-full  my-72   flex flex-col gap-20 px-52'}>
                <div className={'flex justify-between  items-center'}>
                    <div className={'flex w-full flex-col '}>
                        <h2 className={'capitalize text-5xl font-bold w-full  '}>Leading business </h2>
                        <div className={'flex text-5xl font-bold w-full gap-1 '}>
                            trusted
                            <Image src={'/thumb-up.webp'} alt={'thumb'} width={40} height={40}/>
                             us
                        </div>
                    </div>
                    <Button text={'view all cases'} style={`w-32 p-2`}/>
                </div>
                <div className={'flex gap-8 '}>
                    {leadingBusinessData.map((business,index)=>{
                        return(
                            <BusinessCard key={index} {...business}/>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

export default Index;