'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import skewedArrow from '../../../public/images/skewedArrow.svg';
import lightSkewedArrow from '../../../public/images/lightSkewedArrow.svg';

const WhatWeDoCard = ({ icon, lightIcon, iconAlt, heading, content }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div
      className={
        hoverState
          ? `bg-primary-2 relative pt-[4.5rem] md:w-[33%] p-4 text-center rounded-[1.43rem]`
          : `bg-primary-1  relative pt-[4.5rem] md:w-[33%] p-4 text-center rounded-[1.43rem]`
      }
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <Link href={'/management'}>
        {hoverState ? (
          <Image
            className="absolute top-6 right-6 cursor-pointer "
            src={lightSkewedArrow}
            alt="skewed arrow"
            width={15}
          ></Image>
        ) : (
          <Image
            className="absolute top-6 right-6 cursor-pointer "
            src={skewedArrow}
            alt="skewed arrow"
            width={15}
          ></Image>
        )}
      </Link>
      <Image
        src={hoverState ? lightIcon : icon}
        alt={iconAlt}
        className="mx-auto py-2"
        width={80}
      ></Image>
      <h2 className="text-primary-3 font-bold text-[1.5rem]">{heading}</h2>
      <p
        className={
          hoverState
            ? `text-white mx-auto md:w-[90%] py-2 leading-[2rem]`
            : `text-secondary-9 mx-auto md:w-[90%] py-2 leading-[2rem]`
        }
      >
        {content}
      </p>
    </div>
  );
};

export default WhatWeDoCard;
