import Image from 'next/image';

import profileImage from '../../../public/images/bottomSectionProfileIcon.svg';
import checkedStar from '../../../public/images/checkedStar.svg';
import uncheckedStar from '../../../public/images/uncheckedStar.svg';
import SliderWithPreview from './bottomSectionSlide';

const slides = [
  {
    image: profileImage,
    name: 'Albert Flores',
    testimony: ` We stayed at Keji’s place for 4 days last week and were blown away
        by the experience, from the inception to the after care
        experience.The pictures that advertise the property don’t do it
        justice; the home is tastefully furnished with all your mod cons and
        then more`,
  },
  {
    image: profileImage,
    name: 'Albert Flores',
    testimony: ` We stayed at Keji’s place for 4 days last week and were blown away
        by the experience, from the inception to the after care
        experience.The pictures that advertise the property don’t do it
        justice; the home is tastefully furnished with all your mod cons and
        then more`,
  },
  {
    image: profileImage,
    name: 'Albert Flores',
    testimony: ` We stayed at Keji’s place for 4 days last week and were blown away
        by the experience, from the inception to the after care
        experience.The pictures that advertise the property don’t do it
        justice; the home is tastefully furnished with all your mod cons and
        then more`,
  },
  {
    image: profileImage,
    name: 'Albert Flores',
    testimony: ` We stayed at Keji’s place for 4 days last week and were blown away
        by the experience, from the inception to the after care
        experience.The pictures that advertise the property don’t do it
        justice; the home is tastefully furnished with all your mod cons and
        then more`,
  },
];
const BottomSection = () => {
  return (
    <div className="bg-white py-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
      <div className="text-center pb-[2rem]">
        <h2 className="font-bold text-primary-1 pb-4 text-[2rem] md:w-[75%] lg:w-[50%] mx-auto">
          We help you <span className="text-primary-2"> maximize </span> your
          real estate investment
        </h2>
        <p className="text-secondary-1">Hear what our clients have to say</p>
      </div>
      <div>
        <div className="border border-primary-2 pt-[2rem] bg-primary-3 text-center">
          <Image
            src={profileImage}
            alt="profile image"
            className="mx-auto pb-4"
          ></Image>
          <p className="font-semibold text-[13px] p-1">Albert Flores</p>
          <div className="flex flex-row justify-center p-1">
            <Image src={checkedStar} alt="checked star"></Image>
            <Image src={checkedStar} alt="checked star"></Image>
            <Image src={checkedStar} alt="checked star"></Image>
            <Image src={uncheckedStar} alt="unchecked star"></Image>
            <Image src={uncheckedStar} alt="unchecked star"></Image>
          </div>
          <p className="text-[13px]">
            We stayed at Keji’s place for 4 days last week and were blown away
            by the experience, from the inception to the after care
            experience.The pictures that advertise the property don’t do it
            justice; the home is tastefully furnished with all your mod cons and
            then more.
          </p>
        </div>
      </div>
      <div>{/* <SliderWithPreview slides={slides}></SliderWithPreview> */}</div>
    </div>
  );
};

export default BottomSection;
