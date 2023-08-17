import Image from 'next/image';

import missionImg from '../../../public/images/missionImg.svg';

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
              In a span of ten years, our goal is to cut the housing shortage by
              10%, fueling Real Estate Sector growth through expert,
              forward-looking services rooted in genuine enthusiasm and strong
              industry expertise.
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
            src={missionImg}
            alt="beautiful"
            className="rounded-[2.43rem]"
          ></Image>
        </div>
        <div className="md:w-[50%] relative">
          <div className="md:w-[85%] text-center  md:absolute md:right-0">
            <h2 className="font-bold text-secondary-1 pb-4 text-[2rem]">
              Our Vision
            </h2>
            <p className="text-secondary-2 ">
              We aim to become the top solutions provider in West and Central
              Africa's Real Estate, delivering leading industry Advisory,
              Development, and Management Services with a focus on people's
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
