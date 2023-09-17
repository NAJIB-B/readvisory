import Image from 'next/image';

import topBg from '../../../public/images/devSecondBg.svg';
import devPlaning from '../../../public/images/devPlaning.svg';
import consrtFinace from '../../../public/images/consrtFinance.svg';
import devRenovation from '../../../public/images/devRenovation.svg';
import devProjectPlaning from '../../../public/images/devProjectPlaning.svg';

const Development = () => {
  return (
    <div>
      <div className="bg-primary-3 ">
        <h2 className="md:translate-y-[6rem] py-4 font-bold text-secondary-10 mx-auto text-center pb-4 md:py-[5rem] text-[1.5rem] md:text-[2.3rem] md:w-[50%]">
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
        <div className="flex flex-col justify-between items-center gap-4 pb-[3rem] md:flex-row">
          <div className="md:w-[50%]">
            <div className="md:w-[85%]">
              <h2 className="font-bold text-white pb-4 text-[2rem] ">
                Development Planning
              </h2>
              <p className="text-secondary-12 lg:text-[1.3rem]">
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
        <div className="flex flex-col-reverse items-center justify-between gap-8  md:flex-row">
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
              <p className="text-secondary-12 lg:text-[1.3rem]">
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
        <div className="flex flex-col md:flex-row bg-secondary-10 mb-[4rem] overflow-hidden rounded-[20px]">
          <div className="md:flex-[50%] p-[2rem]">
            <h5 className="font-bold text-[1.5rem] lg:text-[2rem] text-primary-2">
              Renovation:
            </h5>
            <p className="font-medium text-white text-[1rem] lg:text-[1.3rem]">
              We plan and execute comprehensive property renovation and
              modernisation projects, as well as targeted Facility Management
              services, to minimise disruptions to occupants during the
              renovation process.
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

        <div className="flex flex-col-reverse md:flex-row bg-secondary-10 overflow-hidden rounded-[20px]">
          <div className="md:flex-[50%]">
            <Image
              src={devProjectPlaning}
              alt="renovating image"
              className="w-full"
            ></Image>
          </div>
          <div className="md:flex-[50%] p-[2rem]">
            <h5 className="font-bold text-[1.5rem] lg:text-[2rem] text-primary-2">
              Project Management:
            </h5>
            <p className="font-medium text-white text-[1rem] lg:text-[1.3rem]">
              We provide a hands-on resource to guide clients from conception to
              completion, by monitoring project timelines, resources, and
              milestones, with an eye on budget and liquidity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
