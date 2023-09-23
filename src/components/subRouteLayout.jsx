import { Text } from './Text';
import { Footer } from './footer';
import Image from 'next/legacy/image';
import shadow1 from '../../public/images/Rectangle 214.png';
import shadow2 from '../../public/images/Rectangle 215.png';

export const SubRouteLayout = ({ children, title, bgUrl }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgUrl.src})`,
          width: '100%',
          // height: '75vh',
        }}
        className=" pt-36 pb-20 w-full border BgImage"
      >
        <div className="w-fit m-auto my-6">
            <div>
              <h1 className="text-2xl md:text-4xl text-center text-white font-bold px-4 ">
                {title}
              </h1>
            </div>
            <div className="adjWrapper">
              <div className="relative w-full h-10">
                <Image
                  src={shadow1}
                  alt="object not found"
                  layout="fill"
                  className="mb-4 h-20"
                  placeholder="blur"
                />
              </div>
              <div  className="relative adjImg w-full h-10">
                <Image
                  src={shadow2}
                  alt="object not found"
                  layout="fill"
                  className="mt-4"
                  placeholder="blur"
                />   
              </div>
            </div>
        </div>
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};
