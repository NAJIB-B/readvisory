'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import logo from '../../../public/images/logo.svg';
import searchIcon from '../../../public/images/Search.svg';
import Button from '../button/button';
import MobileNav from './mobileNav';

export const navLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Advisory',
    link: '/advisory',
  },
  {
    name: 'Development',
    link: '/development',
  },
  {
    name: 'Management',
    link: '/management',
  },
];

const NavBar = () => {
  const router = useRouter();
  const gotoTalkToUs = () => {
    router.push('/talk-to-us');
  };
  return (
    <>
      <div className="md:hidden w-full   absolute">
        <MobileNav></MobileNav>
      </div>
      <div className="hidden md:block w-full   absolute">
        <div className="flex flex-row justify-between p-container-base md:p-container-md lg:px-container-lg xl:px-container-xl ">
          <div className="flex flex-row items-center gap-3">
            {/* display search icon with different sizes based on screen size */}
            <span className="hidden lg:block">
              <Image src={logo} alt="App logo"></Image>
            </span>
            <span className="lg:hidden">
              <Image src={logo} alt="App logo" width={30} height={30}></Image>
            </span>

            <p className="text-primary-2 font-bold text-[1.5rem]">
              readvisory.ng
            </p>
          </div>
          <div className="relative">
            <span className="absolute after:content-[' '] bg-secondary-3 w-[1px] h-[3rem] -translate-y-2"></span>
          </div>
          <div className="flex flex-row gap-3 lg:gap-8 xl:gap-[3rem] items-center">
            {navLinks.map((link, key) => {
              return (
                <Link
                  href={link.link}
                  key={key}
                  className="text-white font-semibold text-[0.8rem] lg:text-[1rem]"
                >
                  {link.name}
                </Link>
              );
            })}
            {/* display search icon with different sizes based on screen size */}
            <span className="hidden lg:block">
              <Image
                src={searchIcon}
                alt="search icon"
                width={20}
                height={20}
              ></Image>
            </span>
            <span className="lg:hidden">
              <Image
                src={searchIcon}
                alt="search icon"
                width={16}
                height={16}
              ></Image>
            </span>
            <Button
              text={'Talk to us'}
              textStyle={'text-primary-1 text-[0.8rem] lg:text-[1rem]'}
              buttonStyle={
                'bg-primary-2 rounded-[4px] py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.25rem]'
              }
              action={gotoTalkToUs}
            ></Button>
          </div>
        </div>
        {/* <hr className="  w-full" /> */}
      </div>
    </>
  );
};

export default NavBar;
