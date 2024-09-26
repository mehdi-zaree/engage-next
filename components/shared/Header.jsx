import React from 'react';
import Image from "next/image";
import Button from "@/components/normalButton/Button";
import HeaderListItems from "@/components/headerListItems";

function Header(props) {
    return (
        <header className='w-full  flex p-7 justify-between items-center px-40'>
            <div>
                <Image src='/logo.webp' alt={'logo'} width={150} height={100}/>
            </div>
            <ul className={' justify-center gap-5 w-fit  hidden lg:flex'}>
                <HeaderListItems text={'features'}/>
                <HeaderListItems text={'solution'}/>
                <HeaderListItems text={'contact'}/>
                <HeaderListItems text={'cases'}/>
                <HeaderListItems text={'blog'}/>
                <HeaderListItems text={'About'}/>
                <HeaderListItems text={'pricing'}/>
                <HeaderListItems text={'shop'}/>
                <HeaderListItems text={'FAQ'}/>
            </ul>
            <Button text={'Request a demo'} style={`w-[170px] h-12`}/>
        </header>

    );
}

export default Header;