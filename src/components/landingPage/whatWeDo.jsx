import Image from 'next/image';

import advisoryIcon from '../../../public/images/advisoryLp.svg';
import skewedArrow from '../../../public/images/skewedArrow.svg';
import developmentIcon from '../../../public/images/developmentLp.svg';
import managementIcon from '../../../public/images/managementLp.svg';

const WhatWeDo = () => {
  return (
    <div className="bg-white py-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
      <div className="text-center pb-[2rem]">
        <h2 className="font-bold text-primary-1 text-[2rem]">Who We Are </h2>
        <p className="text-secondary-8  md:w-[45%] py-4 mx-auto">
          Real Estate can be a complex journey, we support our clients through
          the process by providing strategic advise aimed at maximizing value
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-between md:flex-row">
        <div className="bg-primary-1 relative pt-[4.5rem] md:w-[33%] p-4 text-center rounded-[1.43rem]">
          <Image
            className="absolute top-6 right-6"
            src={skewedArrow}
            alt="skewed arrow"
            width={15}
          ></Image>
          <Image
            src={advisoryIcon}
            alt="advisory icon"
            className="mx-auto"
            width={80}
          ></Image>
          <h2 className="text-primary-3 font-bold text-[1.5rem]">Advisory</h2>
          <p className="text-secondary-9 mx-auto md:w-[90%]">
            Investments, Acquisitions, Financing, Reviews, Transfers & Estate
            Planning
          </p>
        </div>
        <div className="bg-primary-1 relative pt-[4.5rem] md:w-[33%] p-4 text-center rounded-[1.43rem]">
          <Image
            className="absolute top-6 right-6"
            src={skewedArrow}
            alt="skewed arrow"
            width={15}
          ></Image>
          <Image
            src={developmentIcon}
            alt="advisory icon"
            className="mx-auto"
            width={80}
          ></Image>
          <h2 className="text-primary-3 font-bold text-[1.5rem]">
            Development
          </h2>
          <p className="text-secondary-9 mx-auto md:w-[90%]">
            Property Development, Development Planning, Renovations & Project
            Management
          </p>
        </div>
        <div className="bg-primary-1 relative pt-[4.5rem] md:w-[33%] p-4 text-center rounded-[1.43rem]">
          <Image
            className="absolute top-6 right-6"
            src={skewedArrow}
            alt="skewed arrow"
            width={15}
          ></Image>
          <Image
            src={managementIcon}
            alt="advisory icon"
            className="mx-auto"
            width={80}
          ></Image>
          <h2 className="text-primary-3 font-bold text-[1.5rem]">Management</h2>
          <p className="text-secondary-9 mx-auto md:w-[90%]">
            Facility Management, Agency, Tenancy & Lease Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
