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
        <Text
          style="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl md:text-4xl text-center border-black text-white font-bold"
          value={title}
        />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};
