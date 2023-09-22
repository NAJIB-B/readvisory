'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { navLinks } from './navbar';
import logo from '../../../public/images/logo.svg';
import searchIcon from '../../../public/images/Search.svg';
import menuIcon from '../../../public/images/menuIcon.svg';
import Button from '../button/button';

const MobileNav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const toggleNav = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <>
      <div className="flex flex-row items-center justify-between p-container-base xs:px-container-md ">
        <div className="flex flex-row items-center gap-3">
          {/* display search icon with different sizes based on screen size */}
          <span className="hidden xs:block">
            <Image src={logo} alt="App logo" width={30} height={30}></Image>
          </span>
          <span className="xs:hidden">
            <Image src={logo} alt="App logo" width={20} height={20}></Image>
          </span>

          <p className="text-primary-2 font-bold text-[1rem] xs:text-[1.5rem]">
            readvisory.ng
          </p>
        </div>
        <div className="flex items-center gap-4 flex-row">
          <span
            className="lg:hidden"
            type="button" 
            data-te-toggle="modal"
            data-te-target="#exampleModal"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <Image
              src={searchIcon}
              alt="search icon"
              width={16}
              height={16}
            ></Image>
          </span>
          <span onClick={toggleNav}>
            <Image
              src={menuIcon}
              alt="search icon"
              width={16}
              height={16}
            ></Image>
          </span>
        </div>
      </div>
      {mobileNav ? (
        <div className="bg-white fixed top-0 bottom-0 h-screen w-full">
          <div className="relative">
            <h3
              className="absolute font-black top-4 right-4 text-[1.5rem] "
              onClick={toggleNav}
            >
              X
            </h3>
            <div className="flex justify-center flex-col pt-[4rem] gap-4  items-center">
              {navLinks.map((link, key) => {
                return (
                  <Link
                    href={link.link}
                    key={key}
                    className="text-black font-semibold text-[1.8rem] lg:text-[1rem]"
                    onClick={toggleNav}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link href={'/talk-to-us'}>
                <Button
                  text={'Talk to us'}
                  textStyle={'text-primary-1 text-[1.5rem]'}
                  buttonStyle={
                    'bg-primary-2 rounded-[4px] py-[0.5rem] px-[4rem] mt-4'
                  }
                ></Button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileNav;
