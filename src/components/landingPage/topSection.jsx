'use client';

import skewedArrow from '../../../public/images/skewedArrow.svg';
import backgroundImage from '../../../public/images/mainSectionImage.svg';
import Button from '../button/button';
import { useRouter } from 'next/navigation';

const TopSection = () => {
  const router = useRouter();
  const gotoTalkToUs = () => {
    router.push('/talk-to-us');
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/WkwZZPz/ppty-1.png')",
        backgroundSize: '55% 80%',
      }}
      className={`flex flex-col md:flex-row bg-primary-1 bg-contain bg-right-bottom bg-no-repeat  pt-[8rem] pb-4 text-white  px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl`}
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
          textStyle={'text-white text-[1rem] lg:text-[1.5rem]'}
          buttonStyle={
            'border border-primary-2 rounded-[4px] mb-8 py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.25rem]'
          }
          iconWidth={10}
          iconHeight={10}
          icon={skewedArrow}
          action={gotoTalkToUs}
        ></Button>
        <div className="flex flex-row gap-3 text-secondary-8 items-center text-[0.8rem] xs:text-[0.9rem]">
          <p className="font-bold  xs:text-[1.1rem]">readvisory.ng</p>
          <p>ABUJA</p>
          <p>NIGERIA</p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
