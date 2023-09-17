import Image from 'next/image';

import polygon from '../../../public/images/managementPolygon.png';
import greyPolygon from '../../../public/images/greyPolygon.png';
import assetMgt from '../../../public/images/assetMgt.svg';
import facilityMgt from '../../../public/images/facilityMgt.svg';
import leaseMgt from '../../../public/images/leaseMgt.svg';

export const ManagementComponent = () => {
  return (
    <>
      <div className="bg-primary-3 py-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
        <div className="flex flex-col justify-between items-center gap-4 pb-[3rem] md:flex-row">
          <div className="md:w-[50%]">
            <div className="md:w-[85%]">
              <h2 className="font-bold text-secondary-10 pb-4 text-[1.5rem] sm:text-[2rem] ">
                Asset Management
              </h2>
              <p className="text-secondary-8 md:text-[1.3rem]">
                Asset management is about vision; the ability to see a
                building’s potential, and to understand what is needed to
                achieve it. At R. E Advisory, we offer a platform which allows
                clients to develop their vision for the property while
                generating maximum return.
              </p>
            </div>
          </div>
          <div className="md:w-[50%]">
            <Image
              src={assetMgt}
              alt="beautiful"
              className="managementPageShadowRight rounded-[1.25rem] md:w-[75%]"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between items-center gap-8  md:flex-row">
          <div className="md:w-[50%]">
            <Image
              src={facilityMgt}
              alt="beautiful"
              className="managementPageShadowLeft rounded-[1.25rem] md:w-[75%] z-20 relative"
            ></Image>
          </div>
          <div className="md:w-[50%] relative">
            <div className="md:w-[85%] ">
              <h2 className="font-bold text-secondary-10 pb-4 text-[1.5rem] sm:text-[2rem]">
                Facility Management
              </h2>
              <p className="text-secondary-8 md:text-[1.3rem]">
                Buildings require care and attention to fulfill their purpose.
                We provide a wide range of facility management services, aimed
                at maintaining their integrity, comfort and suitability; thereby
                guaranteeing maximum returns to property owners while ensuring
                value for money to occupants.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative bg-primary-3 mt-[-4rem]">
        <Image src={polygon} alt="page asthetics" className="w-full "></Image>
        <Image
          src={greyPolygon}
          alt="page asthetics"
          className=" z-30 absolute right-0   top-0 bottom-0 opacity-[20%]"
        ></Image>
      </div>
      <div className="bg-secondary-10 py-[4rem] z-30 relative px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
        <div className="flex flex-col justify-between items-center gap-4 pb-[3rem] md:flex-row">
          <div className="md:w-[50%]">
            <div className="md:w-[85%]">
              <h2 className="font-bold text-white pb-4 text-[1.5rem] ">
                Lease & Tenancy Management
              </h2>
              <p className="text-secondary-12 md:text-[1.3rem]">
                We understand that rent should count as passive income. At R. E
                Advisory, we manage leasehold properties, aimed at providing
                hassle free income to the Landlord while guaranteeing peaceful
                enjoyment to the occupier.
              </p>
            </div>
          </div>
          <div className="md:w-[50%]">
            <Image
              src={leaseMgt}
              alt="beautiful"
              className=" rounded-[1.25rem] md:w-[75%]"
            ></Image>
          </div>
        </div>
        <div className="relative  text-center pt-[2rem] pb-[3rem] ">
          <span className="absolute after:content-[' ']  bg-primary-2 w-[6rem] h-[3px] left-[50%] translate-y-[-50%] translate-x-[-50%]"></span>
        </div>
      </div>
    </>
  );
};
