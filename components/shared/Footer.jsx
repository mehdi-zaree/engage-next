import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin,FaTelegramPlane,FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



function Footer(props) {
    return (
        <footer className={'w-full mx-auto flex flex-col items-center'}>
            <div className={'rounded-3xl bg-black w-3/4 p-16 flex flex-col gap-40 justify-between '}>
                <div className={'flex  w-full h-1/2  justify-between items-center '}>
                    <div className={' text-white font-semibold flex items-end relative '}>
                        <h3 className={'w-fit text-5xl  text-pretty '}>Never miss an<br/> opportunity again</h3>
                        <span><Image src={'/pointing-finger.webp'} alt={'emoji'} width={50} height={50}/></span>
                        <div
                            className={'w-20 h-10 flex bg-white text-xl rounded-full text-black place-content-center capitalize items-center outline outline-2 outline-black absolute left-20 -bottom-7 '}>client
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4  w-1/3'}>
                        <h6 className={'text-white font-semibold capitalize'}>Subscribe to our newsletter </h6>
                        <input type="text"
                               className={'w-full h-12 rounded-lg bg-[#2e2e2e] px-5 placeholder:text-sm outline-none'}
                               placeholder={'Your Email'}/>
                        <button
                            className={'w-24 font-semibold h-12 bg-[#c6b6fc] rounded-3xl hover:scale-105 hover:rotate-6 duration-200'}>Submit
                        </button>
                    </div>
                </div>
                <div className={'flex  w-full h-1/2'}>
                    <div className={'flex w-1/2 justify-evenly'}>
                        <ul className={'flex flex-col gap-5'}>
                            <h5 className={'capitalize text-2xl font-bold text-white text-pretty'}>pages</h5>
                            <div className={'grid grid-cols-2  gap-3'}>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>home</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>cases</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>about</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>pricing</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>shop</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>FAQ</li>
                                </Link>
                            </div>
                        </ul>
                        <ul className={'flex flex-col gap-5'}>
                            <h5 className={'capitalize text-2xl font-bold text-white text-pretty'}>features</h5>
                            <div className={'flex flex-col gap-2'}>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>feature 1</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>feature 2</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>feature 3</li>
                                </Link>
                            </div>
                        </ul>
                        <ul className={'flex flex-col gap-5'}>
                            <h5 className={'capitalize text-2xl font-bold text-white text-pretty'}>solutions</h5>
                            <div className={'flex flex-col gap-2'}>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>solution 1</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>solution 2</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>solution 3</li>
                                </Link>
                            </div>
                        </ul>
                        <ul className={'flex flex-col gap-5'}>
                            <h5 className={'capitalize text-2xl font-bold text-white text-pretty'}>contact</h5>
                            <div className={'flex flex-col gap-2'}>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>contact 1</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>contact 2</li>
                                </Link>
                                <Link href={'/'}>
                                    <li className={'text-gray-400 capitalize hover:text-white duration-200'}>contact 3</li>
                                </Link>
                            </div>
                        </ul>
                    </div>
                    <div className={'h-32 w-1/2  flex  justify-center '}>
                        <div className='flex flex-col gap-5 '>
                            <h6 className={'text-white font-bold capitalize text-2xl'}>socials</h6>
                            <ul className={'flex gap-2'}>
                                <Link href={'/'}>
                                    <li>
                                        <FaLinkedin color={'white'} size={'28px'} />
                                    </li>
                                </Link>
                                <Link href={'/'}>
                                    <li>
                                        <FaInstagram color={'white'} size={'28px'} />
                                    </li>
                                </Link>
                                <Link href={'/'}>
                                    <li>
                                        <FaTelegramPlane color={'white'} size={'28px'}/>
                                    </li>
                                </Link>
                                <Link href={'/'}>
                                    <li>
                                        <MdOutlineEmail color={'white'} size={'28px'} />
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'w-3/4 justify-between flex my-5 text-gray-400'}>
                <p>© Engage Template —  Powered by Webflow | Created by template.supply</p>
                <ul className={'flex gap-4'}>
                    <Link href={'/'}>
                        <li>
                            Style Guide
                        </li>
                    </Link>
                    <Link href={'/'}>
                        <li>
                            Licenses
                        </li>
                    </Link>
                    <Link href={'/'}>
                        <li>
                            Changelog
                        </li>
                    </Link>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
