import { Text } from './Text';
import { Footer } from './footer';

export const SubRouteLayout = ({ children, title, bgUrl }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgUrl.src})`,
          width: '100%',
          height: '75vh',
        }}
        className="px-20 pt-36 pb-20 w-full border BgImage"
      >
        <h1 className="absolute Border top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl md:text-4xl text-center text-white font-bold">
          {title}
        </h1>
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};
