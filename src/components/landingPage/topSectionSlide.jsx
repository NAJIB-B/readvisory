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
import frame2 from '../../../public/images/frame2.jpeg';
import frame3 from '../../../public/images/frame3.jpeg';
import frame4 from '../../../public/images/frame4.jpeg';

const slideImages = [frame1, frame2, frame3, frame4];

const TopSectionSlide = () => {
  return (
    <div className="py-[4rem] px-container-md md:px-container-md lg:px-container-lg xl:px-container-xl">
      <div className="">
        <Swiper
          modules={[Navigation, Keyboard]}
          navigation={true}
          loop={true}
          keyboard={{ enabled: true, onlyInViewport: true }}
        >
          {slideImages.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <Image
                  src={item}
                  alt="beautiful house"
                  className="w-full bg-contain h-[65vh]"
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
