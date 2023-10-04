import advisoryIcon from '../../../public/images/advisoryLp.svg';
import developmentIcon from '../../../public/images/developmentLp.svg';
import managementIcon from '../../../public/images/managementLp.svg';
import lightAdvisoryIcon from '../../../public/images/lightAdvisoryLp.svg';
import lightDevelopmentIcon from '../../../public/images/lightDevelopmentLp.svg';
import lightManagementIcon from '../../../public/images/lightManagementLp.svg';
import WhatWeDoCard from './whatWeDoCard';

const WhatWeDo = () => {
  return (
    <div className="bg-white py-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
      <div className="text-center pb-[2rem]">
        <h2 className="font-bold text-primary-1 text-[2rem]">what we do:</h2>

        <p className="text-secondary-8  md:w-[45%] py-4 mx-auto">
          Real Estate can be a complex journey, we{' '}
          <span className="text-primary-2 font-black text-[1.1rem]">
            {' '}
            support
          </span>{' '}
          our clients through the process by providing strategic advise aimed at
          maximizing value
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-between md:flex-row">
        {[
          {
            icon: advisoryIcon,
            lightIcon: lightAdvisoryIcon,
            iconAlt: 'advisory icon',
            heading: 'Advisory',
            link: '/advisory',
            content:
              ' Mortage and property financing, Reviews, Transfers & Estate Planning',
          },
          {
            icon: developmentIcon,
            lightIcon: lightDevelopmentIcon,
            iconAlt: 'development icon',
            heading: 'Development',
            link: '/development',

            content:
              '  Property Development, Development Planning, Renovations & Project Management',
          },
          {
            icon: managementIcon,
            lightIcon: lightManagementIcon,
            iconAlt: 'management icon',
            heading: 'Management',
            link: '/management',
            content: ' Facility Management, Agency, Tenancy & Lease Management',
          },
        ].map((item, key) => {
          return (
            <WhatWeDoCard
              key={key}
              icon={item.icon}
              lightIcon={item.lightIcon}
              iconAlt={item.iconAlt}
              heading={item.heading}
              link={item.link}
              content={item.content}
            ></WhatWeDoCard>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
