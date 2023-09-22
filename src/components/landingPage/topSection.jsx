import Link from 'next/link';
import skewedArrow from '../../../public/images/skewedArrow.svg';
import TopImg from "../../../public/images/Frame 80437.png"
import Button from '../button/button';
import Image from 'next/legacy/image';

const TopSection = () => {
  return (
    <div
      className={`flex flex-wrap justify-between items-center border bg-primary-1 bg-bottom bg-contain sm:bg-right-bottom bg-no-repeat  pt-[8rem] pb-4 text-white  px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl`}
    >
      <div className=" sm:w-full xs:w-full xxs:w-full md:w-[40%] xl:w-[40%] lg:w-[40%] ">
        <h1 className="font-bold text-[2rem] xs:text-[2.7rem] mt-[2rem]  sm:text-[2rem] md:text-[2.7rem] xm:text-[3rem] lg:text-[3.4rem] xl:text-[4rem] ">
          Passionate <br /> about <br />{' '}
          <span className="text-primary-2">Real Estate </span>
        </h1>
        <p className="mb-6">
          we provide strategic advise aimed at maximizing value
        </p>
        <div className='flex flex-col justify-start sm:items-center xs:items-center xxs:items-center md:items-start xl:items-start lg:items-start'>
        <Link href={'/talk-to-us'}>
          <Button
            text={'Talk to us'}
            textStyle={'text-white text-[1rem]'}
            buttonStyle={
              'mx-auto bg-secondary-10 sm:bg-secondary-3 sm:mx-1 border border-primary-2 mb-[6rem] sm:mb-8 rounded-[4px] mb-8 py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.25rem]'
            }
            iconWidth={10}
            iconHeight={10}
            icon={skewedArrow}
          ></Button>
        </Link>
        <div className="flex flex-row gap-3 justify-center sm:justify-normal  text-white sm:text-secondary-8 items-center text-[0.8rem] xs:text-[0.9rem]">
          <p className="font-bold  xs:text-[1.1rem] text-secondary-8">readvisory.ng</p>
        </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center sm:h-[24rem] xs:h-[24rem] xxs:h-[24rem] xxxs:h-auto md:h-screen xl:h-screen lg:h-screen sm:w-full xs:w-full xxs:w-full md:w-1/2 xl:w-1/2 lg:w-1/2'>
        <div className="relative w-full h-[32rem]">
            <Image
              src={TopImg}
              alt="object not found"
              layout="fill"
              objectFit="contain"
              placeholder="blur"
            />
          </div>
      </div>
    </div>
  );
};

export default TopSection;
