import Link from 'next/link';

import { ContactUs } from './contact';
import { Talk } from './talk';

export const Enquiry = () => {
  return (
    <>
      <div className="bg-light-cream p-14">
        <h2 className="font-bold text-4xl text-center mb-5">Talk to us</h2>
        <h4 className="font-bold text-2xl text-center mb-5 c-deep-black">
          Answer our property enquiry questionnaire
        </h4>

        <p className="text-sm text-center mb-5 c-deep-black">
          or just send us a{' '}
          <Link
            href={'#contact-us'}
            className="decoration-[none] text-primary-2"
          >
            message
          </Link>
        </p>
      </div>
      <Talk />
      <ContactUs />
    </>
  );
};
