import Image from 'next/legacy/image';
import { Text } from '../Text';
import call from '../../../public/images/yellowphone.png';
import location from '../../../public/images/yellowmap.png';
import letter from '../../../public/images/yelloLetter.png';
import Bg from '../../../public/images/contactBg.png';
import insta from '../../../public/images/yellowinsta.png';
import face from '../../../public/images/yellowface.png';
import { WhiteForm } from './whiteForm';

export const ContactUs = () => {
  return (
    <div className="bg-dark-moderate py-12 px-6">
      <h2
        id="contact-us"
        className="c-gold text-4xl text-center font-extrabold mb-4"
      >
        Contact Us
      </h2>

      <Text
        style="text-md text-center mb-6 c-deep-black mb-2 font-bold"
        value="Any question or remarks? Just write us a message!"
      />
      <div className="bg-white rounded-lg grid grid-flow-row-dense lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4 p-4">
        <div
          className="py-14 px-12 contactBg lg:rounded-r-xl md:rounded-r-xl xl:rounded-r-xl sm:rounded-r-none xs:rounded-r-none xxs:rounded-r-none xs:col-span-1 xxs:col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
          style={{
            backgroundImage: `url(${Bg.src})`,
            width: '100%',
            height: '100%',
          }}
        >
          <Text
            style="text-3xl text-start text-white font-bold mb-4"
            value="Send us a message"
          />
          <Text
            style=" text-xs text-start text-white mb-1"
            value="well get back to you"
          />
          <div className="pb-8 pt-12 xs:w-full sm:w-full">
            {[
              {
                icon: call,
                text: '+234 - 90995000',
              },
              {
                icon: letter,
                text: 'enquiries@readvisory.ng',
              },
              {
                icon: location,
                text: 'No. 40, Lusaka Street, Wuse - Abuja',
              },
            ].map((info, index) => {
              const { icon, text } = info;
              return (
                <div key={index} className="flex items-center mb-6">
                  <div className="me-2 relative w-4 h-4">
                    <Image
                      src={icon}
                      alt="object not found"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </div>
                  <div>
                    <Text style="text-xs text-white" value={text} />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex">
            <div className="me-2 relative w-8 h-8 ">
              <Image
                src={insta}
                alt="object not found"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
            <div className="me-2 relative w-8 h-8">
              <Image
                src={face}
                alt="object not found"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
        <div className="xs:col-span-1 xxs:col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
          <WhiteForm />
        </div>
      </div>
    </div>
  );
};
