import Link from 'next/link';
import Image from 'next/image';

import Button from '../button/button';
import profileImage from '../../../public/images/bottomSectionProfileIcon.svg';
import checkedStar from '../../../public/images/checkedStar.svg';
import uncheckedStar from '../../../public/images/uncheckedStar.svg';
import SliderWithPreview from './bottomSectionSlide';
import skewedArrow from '../../../public/images/skewedArrow.svg';
import backgroundImage from '../../../public/images/layerBeforeFooter.png';

const slides = [
  {
    name: 'Mr Ayo',
    testimony: `In late 2022, we moved to Abuja for work with our two kids. R.E Advisory helped us find an affordable, serene home, handled negotiations, and arranged a comfortable mortgage. Their professionalism impressed us, and our kids love the new house. Highly recommend their services to future homeowners.`,
    checkedStar,
    uncheckedStar,
    location:"Airport road abuja"
  },
  {
    name: 'Akumast Nigeria Ltd.',
    testimony: ` Over the last 4 years, our partnership has delivered 2 housing estate and over 200 units of 2 bedroom, 3 bedroom and 4 bedroom properties. They helped us secure funding for both projects and handled the administrative side of things with the bank which allowed to us focus of project delivery.`,
    checkedStar,
    uncheckedStar,
    location:"Nkwelle, Anambra State"
  },
  {
    name: 'Albert Flores',
    testimony: `In 2021, I hired R.E Advisory to invest in real estate, and they guided me to buy a 3-bedroom terrace house in Abuja's Life Camp area. They assisted with equity payments, NHF application, and now my property has appreciated by over 15%. Thanks to the team!`,
    checkedStar,
    uncheckedStar,
    location:"Abuja"
  },
];
const BottomSection = () => {
  return (
    <>
      <div className="bg-white  pt-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
        <div className="text-center pb-[2rem]">
          <h2 className="font-bold text-primary-1 pb-4 text-[2rem] md:w-[75%] lg:w-[50%] mx-auto">
            We help you <span className="text-primary-2"> maximize </span> your
            real estate investment
          </h2>
          <p className="text-secondary-1">Hear what our clients have to say</p>
        </div>
      </div>
      <div className="px-2 md:px-container-md lg:px-container-lg xl:px-container-xl">
        <SliderWithPreview slides={slides}></SliderWithPreview>
      </div>
      <div className="relative translate-y-[10rem] md:px-14 pb-8">
        <div className="relative bg-secondary-2 md:bg-white md:pt-[3rem] md:overflow-x-hidden md:rounded-[2.43rem]">
          <div className="bg-secondary-2  py-[3rem] px-[4rem] text-left  md:rounded-[2.43rem]">
            <h2 className="font-bold text-white pb-4 text-[1.5rem] sm:text-[2rem] md:w-[45%] ">
              Make your estate dreams a{' '}
              <span className="text-primary-2">reality </span>
            </h2>
            <Link href={'/talk-to-us'}>
              <Button
                text={'Talk to us'}
                textStyle={'text-white text-[1rem]'}
                buttonStyle={
                  'bg-secondary-10 sm:bg-secondary-3 sm:mx-1 border border-primary-2  sm:mb-8 rounded-[4px]  py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.25rem]'
                }
                iconWidth={10}
                iconHeight={10}
                icon={skewedArrow}
              ></Button>
            </Link>
          </div>
          <Image
            src={backgroundImage}
            alt="brown house"
            className="w-[100%] md:absolute md:w-[65%] h-[100%] bottom-0 top-0 right-0"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default BottomSection;
