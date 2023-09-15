
import { Text } from '../Text';
import { ContactUs } from './contact';
import { Talk } from './talk';

export const Enquiry = () => {

  return (
    <>
      <div className="bg-light-cream p-14">
        <Text style="font-bold text-4xl text-center mb-5" value="Talk to us" />
        <Text
          style="font-bold text-2xl text-center mb-5 c-deep-black"
          value="Answer our property enquiry questionnaire"
        />
        <Text
          style="text-sm text-center mb-5 c-deep-black"
          value="or just send us a message "
        />
      </div>
      <Talk />
      <ContactUs />
    </>
  );
};
