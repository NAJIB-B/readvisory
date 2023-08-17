// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const SliderWithPreview = ({slides}) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         centerMode: true,
//         centerPadding: '100px', // Adjust this to control the preview width
//       };
//     return (
//         <div>
//              <Slider {...settings}>
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className="border  border-primary-2 pt-[2rem] bg-primary-3 text-center"
//             >
//               <Image
//                 src={slide.image}
//                 alt="profile image"
//                 className="mx-auto pb-4"
//               ></Image>
//               <p className="font-semibold text-[13px] p-1">{slide.name}</p>
//               <div className="flex flex-row justify-center p-1">
//                 <Image src={checkedStar} alt="checked star"></Image>
//                 <Image src={checkedStar} alt="checked star"></Image>
//                 <Image src={checkedStar} alt="checked star"></Image>
//                 <Image src={uncheckedStar} alt="unchecked star"></Image>
//                 <Image src={uncheckedStar} alt="unchecked star"></Image>
//               </div>
//               <p className="text-[13px]">{slide.testimony}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>

//      );
// }

// export default SliderWithPreview;
