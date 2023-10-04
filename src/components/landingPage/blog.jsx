import slide1 from '../../../public/images/housing11.jpg';
import slide2 from '../../../public/images/Ahmed-Musa-Dangiwa.jpg';
import slide3 from '../../../public/images/NPC3.jpg';
import slide4 from '../../../public/images/Director-General-National-Pension-Commission-PENCOM-Aisha-Dahir-Umar.jpg';
import slide5 from '../../../public/images/Home-owners-groan.jpg';
import slide6 from '../../../public/images/32MN2HF-Preview_W.jpg';
import slide7 from '../../../public/images/logoFederalMortage.png';
import slide8 from '../../../public/images/Real-estate-REDAN.jpg';
import BlogSlider from './blogSectionSlider';

const slides = [
  {
    img: slide1,
    info: 'FMBN raises NHF loan limit from 15M to 50M',
    link: 'https://punchng.com/fmbn-raises-housing-loan-to-n50m-unveils-72-unit-homes/',
  },
  {
    img: slide2,
    info: 'Nigeria’s New Housing Minister elected Shelter Afrique Chairman',
    link: 'https://guardian.ng/news/housing-minister-dangiwa-elected-chairperson-of-shelter-afrique/',
  },
  {
    img: slide3,
    info: 'Federal Housing Ministry & National Population Commission to collaborate on accurate Housing Data',
    link: 'https://fmino.gov.ng/housing-ministry-population-commission-collaborates-to-establish-accurate-housing-data-in-nigeria/',
  },
  {
    img: slide4,
    info: 'PENCOM approves use of 25% Retirement Savings for mortgage equity contribution',
    link: 'https://dailytrust.com/pencom-approves-use-of-25-pension-savings-for-mortgage/',
  },
  {
    img: slide5,
    info: 'Construction, Real Estate Contribution to GDP Decline in Q1 of 2023',
    link: 'https://punchng.com/construction-real-estate-gdp-contribution-decline-to-n8-33tn/',
  },
  {
    img: slide6,
    info: 'Property Prices Spike by up to 40% in Major Cities Due to Inflation and High Interest Rates',
    link: 'https://guardian.ng/news/inflation-high-interest-rates-spike-sales-rents-by-40-in-major-cities/',
  },
  {
    img: slide7,
    info: 'List of FMBN Accredited Primary Mortgage Banks for NHF applications',
    link: 'https://www.fmbn.gov.ng/PMBs/pmbs.html',
  },
  {
    img: slide8,
    info: 'Real Estate Developers Association of Nigeria (REDAN) secures N26B Funding from Shelter Afrique for Rural – Urban Housing Initiative ',
    link: 'https://punchng.com/redan-secures-n26bn-housing-fund/',
  },
];
export const Blog = () => {
  return (
    <div className="py-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl ">
      <BlogSlider slides={slides}></BlogSlider>
    </div>
  );
};
