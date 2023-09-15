import Link from 'next/link';
import skewedArrow from '../../../public/images/skewedArrow.svg';
import Button from '../button/button';

const TopSection = () => {
  return (
    <div
      className={`hero_section_image h-[100vh] flex flex-col md:flex-row bg-primary-1 bg-bottom bg-contain sm:bg-right-bottom bg-no-repeat  pt-[8rem] pb-4 text-white  px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl`}
    >
      <div className="w-full sm:w-[40%]">
        <h1 className="font-bold text-[2rem] xs:text-[2.7rem] mt-[2rem]  sm:text-[2rem] md:text-[2.7rem] xm:text-[3rem] lg:text-[3.4rem] xl:text-[4rem] ">
          Passionate <br /> about <br />{' '}
          <span className="text-primary-2">Real Estate </span>
        </h1>
        <p className="mb-6">
          we provide strategic advise aimed at maximizing value
        </p>
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
          <p className="font-bold  xs:text-[1.1rem]">readvisory.ng</p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
