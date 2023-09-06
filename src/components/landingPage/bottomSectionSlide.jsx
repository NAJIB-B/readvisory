// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Keyboard,
  Mousewheel,
  EffectCreative,
  // EffectCoverflow,
  Pagination,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';

import Image from 'next/image';

const SliderWithPreview = ({ slides }) => {
  return (
    <div>
      <Swiper
        modules={[
          Navigation,
          Mousewheel,
          Pagination,
          Keyboard,
          EffectCreative,
          // EffectCoverflow,
        ]}
        grabCursor={true}
        slidesPerView={1}
        initialSlide={1}
        keyboard={{ enabled: true, onlyInViewport: true }}
        centeredSlides={true}
        loop={true}
        pagination={{ dynamicMainBullets: true, dynamicBullets: true }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide, key) => {
          return (
            <SwiperSlide key={key}>
              {({ isActive }) => (
                <div
                  className={`${
                    isActive ? 'scale-[1]' : 'scale-[0.8]'
                  } border border-primary-2  shadow-devPage rounded-lg py-[2rem] bg-primary-3 text-center px-2 sm:mx-2`}
                >
                  <Image
                    src={slide.image}
                    alt="profile image"
                    className="mx-auto pb-4"
                  ></Image>
                  <p className="font-semibold text-[13px] p-1">{slide.name}</p>
                  <div className="flex flex-row justify-center p-1">
                    <Image src={slide.checkedStar} alt="checked star"></Image>
                    <Image src={slide.checkedStar} alt="checked star"></Image>
                    <Image src={slide.checkedStar} alt="checked star"></Image>
                    <Image
                      src={slide.uncheckedStar}
                      alt="unchecked star"
                    ></Image>
                    <Image
                      src={slide.uncheckedStar}
                      alt="unchecked star"
                    ></Image>
                  </div>
                  <p className="text-[13px]">
                    We stayed at Keji’s place for 4 days last week and were
                    blown away by the experience, from the inception to the
                    after care experience.The pictures that advertise the
                    property don’t do it justice; the home is tastefully
                    furnished with all your mod cons and then more.
                  </p>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderWithPreview;
