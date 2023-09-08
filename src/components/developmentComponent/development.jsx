'use client';
import Image from 'next/image';
import { useEffect, useContext } from 'react';

import { NavContext, navOptions } from '@/context/nav';
import topBg from '../../../public/images/devSecondBg.svg';
import devPlaning from '../../../public/images/devPlaning.svg';
import consrtFinace from '../../../public/images/consrtFinance.svg';
import devRenovation from '../../../public/images/devRenovation.svg';
import devProjectPlaning from '../../../public/images/devProjectPlaning.svg';

const Development = () => {
  const { setActiveNav } = useContext(NavContext);

  useEffect(() => {
    setActiveNav(navOptions.development);
  }, []);
  return (
    <div>
      <div className="bg-primary-3 ">
        <h2 className="font-bold text-secondary-10 mx-auto text-center pb-4 md:py-[5rem] text-[2rem] md:w-[50%]">
          We offer
          <span className="text-primary-2"> residential </span>
          and
          <span className="text-primary-2"> commercial </span>
          property development services.
        </h2>
        <Image
          src={topBg}
          alt="grey city land scape"
          className="w-full"
        ></Image>
      </div>
      <div className="bg-secondary-11 py-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
        <div className="flex flex-col justify-between gap-4 pb-[3rem] md:flex-row">
          <div className="md:w-[50%]">
            <div className="md:w-[85%]">
              <h2 className="font-bold text-white pb-4 text-[2rem] ">
                Development Planning
              </h2>
              <p className="text-secondary-12 ">
                We prepare a cohesive strategy encompassing; drawings and
                documentation, feasibility, viability, and environmental impact
                studies, regulatory interactions and building permits/approvals
                to ensure smooth project take-off.
              </p>
            </div>
          </div>
          <div className="md:w-[50%]">
            <Image
              src={devPlaning}
              alt="beautiful"
              className="devPageShadowRight rounded-[1.25rem] md:w-[75%]"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-8  md:flex-row">
          <div className="md:w-[50%]">
            <Image
              src={consrtFinace}
              alt="beautiful"
              className="devPageShadowLeft rounded-[1.25rem] md:w-[75%]"
            ></Image>
          </div>
          <div className="md:w-[50%] relative">
            <div className="md:w-[85%] ">
              <h2 className="font-bold text-white pb-4 text-[2rem]">
                Construction Finance
              </h2>
              <p className="text-secondary-12 ">
                We understand the unique need for liquidity in real estate
                projects, therefore we seek out sustainable structured finance
                opportunities to ensure adequate liquidity during the lifespan
                of the project
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-11 pb-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
        <div className="flex flex-col md:flex-row bg-secondary-10 mb-[4rem]">
          <div className="md:flex-[50%] p-[2rem]">
            <h5 className="font-bold md:text-[1.5rem] text-primary-2">
              Renovation:
            </h5>
            <p className="font-medium text-white text-[0.8rem] md:text-[1.2rem]">
              We plan and execute comprehensive property renovation and
              modernisation projects, including occupant management as well as
              targeted Facility Management services, to minimise disruptions to
              occupants during the renovation process.
            </p>
          </div>
          <div className="md:flex-[50%]">
            <Image
              src={devRenovation}
              alt="renovating image"
              className="w-full"
            ></Image>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row bg-secondary-10 ">
          <div className="md:flex-[50%]">
            <Image
              src={devProjectPlaning}
              alt="renovating image"
              className="w-full"
            ></Image>
          </div>
          <div className="md:flex-[50%] p-[2rem]">
            <h5 className="font-bold md:text-[1.5rem] text-primary-2">
              Project Management:
            </h5>
            <p className="font-medium text-white text-[0.8rem] md:text-[1.2rem]">
              We provide a hands-on resource to guides clients from conception
              to completion stage, monitoring project timelines, resources, and
              milestones, with an strong eye on timelines and budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
