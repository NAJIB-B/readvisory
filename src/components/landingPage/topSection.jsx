'use client';
import { useEffect, useContext } from 'react';

import { NavContext, navOptions } from '@/context/nav';
import skewedArrow from '../../../public/images/skewedArrow.svg';
import backgroundImage from '../../../public/images/mainSectionImage.svg';
import Button from '../button/button';
import { useRouter } from 'next/navigation';

const TopSection = () => {
  const { setActiveNav } = useContext(NavContext);

  useEffect(() => {
    setActiveNav(navOptions.home);
  }, []);
  const router = useRouter();
  const gotoTalkToUs = () => {
    router.push('/talk-to-us');
  };

  return (
    <div
      className={`hero_section_image h-[100vh] flex flex-col md:flex-row bg-primary-1 bg-bottom bg-contain sm:bg-right-bottom bg-no-repeat  pt-[8rem] pb-4 text-white  px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl`}
    >
      <div className="w-full sm:w-[40%]">
        <h1 className="font-bold text-[2rem] xs:text-[2.7rem]  sm:text-[2rem] md:text-[2.7rem] xm:text-[3rem] lg:text-[3.4rem] xl:text-[4rem] ">
          Passionate <br /> about <br />{' '}
          <span className="text-primary-2">Real Estate ?</span>
        </h1>
        <p className="mb-6">
          we provide strategic advise aimed at maximizing value
        </p>
        <Button
          text={'Talk to us'}
          textStyle={'text-white text-[1rem]'}
          buttonStyle={
            'mx-auto bg-secondary-10 sm:bg-secondary-3 sm:mx-1 border border-primary-2 mb-[6rem] sm:mb-8 rounded-[4px] mb-8 py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.25rem]'
          }
          iconWidth={10}
          iconHeight={10}
          icon={skewedArrow}
          action={gotoTalkToUs}
        ></Button>
        <div className="flex flex-row gap-3 justify-center sm:justify-normal  text-white sm:text-secondary-8 items-center text-[0.8rem] xs:text-[0.9rem]">
          <p className="font-bold  xs:text-[1.1rem]">readvisory.ng</p>
          <p>ABUJA</p>
          <p>NIGERIA</p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
