'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Keyboard,
  Mousewheel,
  Grid,
  Pagination,
} from 'swiper/modules';

// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import Link from 'next/link';

import { Text } from '../Text';

const BlogSlider = ({ slides }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Mousewheel, Pagination, Keyboard, Grid]}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        keyboard={{ enabled: true, onlyInViewport: true }}
        pagination={{ dynamicMainBullets: true, dynamicBullets: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            grid: { rows: 2, fill: 'row' },
          },
        }}
      >
        {slides.map((slide, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="mb-4 cursor">
                <div className="relative w-full mb-4 h-[20rem]">
                  <Link href={slide.link} target="_blank">
                    <Image
                      src={slide.img}
                      alt="object not found"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg w-full"
                    />
                  </Link>
                </div>
                <div>
                  <Link href={slide.link} target="_blank">
                    <Text
                      style="text-lg text-start text-secondary-8 font-semibold hover:text-primary-2"
                      value={slide.info}
                    />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BlogSlider;
