import Image from 'next/image';

import Button from '../button/button';
import TopSectionSlide from './topSectionSlide';
import skewedArrow from '../../../public/images/skewedArrow.svg';

const WhoWeAre = () => {
  return (
    <>
      <div className="bg-primary-3 py-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
        <div className="text-center ">
          <h2 className="font-bold text-primary-1 text-[2rem]">Who We Are </h2>
          <p className="text-secondary-8  sm:w-[45%] py-4 mx-auto">
            We are <strong>Professionals</strong> from different backgrounds,
            with a <strong>shared passion </strong>
            for real estate
          </p>
          <Button
            text={'Learn more'}
            textStyle={'text-white text-[1rem]'}
            buttonStyle={
              'bg-primary-1 mx-auto rounded-[4px] mb-8 py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.25rem]'
            }
            iconWidth={10}
            iconHeight={10}
            icon={skewedArrow}
          ></Button>
        </div>

        <TopSectionSlide></TopSectionSlide>
      </div>
      <div className="relative  text-center">
        <span className="absolute after:content-[' ']  bg-primary-2 w-[4px] h-[3.5rem] -translate-y-6"></span>
      </div>
    </>
  );
};

export default WhoWeAre;
