import Image from 'next/image';

import missionImg from '../../../public/images/missionImg.svg';
import visionImg from '../../../public/images/visionImg.svg';

const MissionAndVision = () => {
  return (
    <div className="bg-primary-3 py-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
      <div className="flex flex-col justify-between gap-4 pb-[3rem] md:flex-row">
        <div className="md:w-[50%]">
          <div className="md:w-[85%] text-center">
            <h2 className="font-bold text-secondary-1 pb-4 text-[2rem] md:text-right">
              Our Mission
            </h2>
            <p className="text-secondary-2 md:text-right">
              Our mission is to reduce the housing deficit by 5% over the next
              decade, fueling real estate sector contribution to overall GDP
              growth by providing Professional, forward-looking services rooted
              in genuine enthusiasm and strong industry expertise.
            </p>
          </div>
        </div>
        <div className="md:w-[50%]">
          <Image
            src={missionImg}
            alt="beautiful"
            className="rounded-[2.43rem]"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between gap-4  md:flex-row">
        <div className="md:w-[50%]">
          <Image
            src={visionImg}
            alt="beautiful"
            className="rounded-[2.43rem]"
          ></Image>
        </div>
        <div className="md:w-[50%] relative">
          <div className="md:w-[85%] text-center md:text-left  md:absolute md:right-0">
            <h2 className="font-bold text-secondary-1 pb-4 text-[2rem]">
              Our Vision
            </h2>
            <p className="text-secondary-2 ">
              To be the leading Real Estate solutions provider across West and
              Central Africa, delivering industry leading Advisory, Development,
              and Management Services with a focus on maximinzing value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
