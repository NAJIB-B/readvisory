'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Keyboard,
  Mousewheel,
  EffectCreative,
  // EffectCoverflow,
  Pagination,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';

import Image from 'next/image';

import frame1 from '../../../public/images/frame1.jpeg';
import frame3 from '../../../public/images/frame3.jpeg';
import frame4 from '../../../public/images/ourwork2.jpeg';
import frame5 from '../../../public/images/our work3.jpeg';
import frame6 from '../../../public/images/our work4.jpeg';
import frame7 from '../../../public/images/ourwork5.jpeg';
import frame8 from '../../../public/images/ourWork1.jpeg';

const slideImages = [frame1, frame3, frame4, frame5, frame6, frame7, frame8];

const TopSectionSlide = () => {
  return (
    <div className="py-[4rem] sm:px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
      <div className="">
        <Swiper
          modules={[Navigation, Keyboard]}
          navigation={true}
          loop={true}
          autoplay={true}
          keyboard={{ enabled: true, onlyInViewport: true }}
        >
          {slideImages.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <Image
                  src={item}
                  alt="beautiful house"
                  className="w-full bg-contain h-[65vh] object-cover"
                ></Image>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSectionSlide;
