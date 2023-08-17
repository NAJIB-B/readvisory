import Image from 'next/image';

import Button from '../button/button';
import skewedArrow from '../../../public/images/skewedArrow.svg';
import frame1 from '../../../public/images/Frame1.svg';
import frame2 from '../../../public/images/Frame2.svg';
import frame3 from '../../../public/images/Frame3.svg';
import frame4 from '../../../public/images/Frame4.svg';
import frame5 from '../../../public/images/Frame5.svg';

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
        <div className="mx-auto">
          <div className="who_we_are_grid_container">
            <Image
              className="item1 grid_image"
              src={frame1}
              alt="beautiful house"
            ></Image>
            <Image
              className="item2 grid_image"
              src={frame2}
              alt="beautiful house"
            ></Image>

            <Image
              className="item3 grid_image"
              src={frame3}
              alt="beautiful house"
            ></Image>

            <Image
              className="item4 grid_image"
              src={frame4}
              alt="beautiful house"
            ></Image>

            <Image
              className="item5 grid_image"
              src={frame5}
              alt="beautiful house"
            ></Image>
          </div>
        </div>
      </div>
      <div className="relative  text-center">
        <span className="absolute after:content-[' ']  bg-primary-2 w-[4px] h-[3.5rem] -translate-y-6"></span>
      </div>
    </>
  );
};

export default WhoWeAre;
