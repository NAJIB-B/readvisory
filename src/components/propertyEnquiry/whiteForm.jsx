'use client';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import { InputField } from '../custormFormField';
import { Text } from '../Text';
import Button from '../button/button';

export const WhiteForm = () => {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_CONTACT_FORM_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const SubmitHandler = ({ name, email, phoneNumber, message, subject }) => {
    console.log(name, message, subject, email, phoneNumber);
    emailjs
      .send(
        serviceId,
        templateId,
        {
          user_name: name,
          subject: subject,
          message: message,
          user_email: email,
          phone_number: phoneNumber,
        },
        publicKey
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form
      className="py-12 lg:px-10 md:px-10 sm:px-4 xs:px-4 xxs:px-4 xl:px-10"
      onSubmit={handleSubmit(SubmitHandler)}
    >
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-5">
        {[
          {
            title: 'name',
            labelName: 'Name',
            selectArrayOption: null,
            type: 'text',
            error: errors.name,
            placeHold: 'john doe',
            required: true,
          },
          {
            title: 'email',
            labelName: 'Email',
            selectArrayOption: null,
            type: 'email',
            error: errors.email,
            placeHold: '',
            required: true,
          },
          {
            title: 'phoneNumber',
            labelName: 'Phone Number',
            selectArrayOption: null,
            type: 'number',
            error: errors.phoneNumber,
            placeHold: '+234 676 898 787',
            required: false,
          },
        ].map((option, index) => {
          const {
            title,
            labelName,
            placeHold,
            selectArrayOption,
            type,
            error,
            required,
          } = option;
          switch (type) {
            case 'select':
              return (
                <InputField
                  key={index}
                  name={title}
                  type={type}
                  placeHolder={placeHold}
                  labelTitle={labelName}
                  labelStyle="text-sm font-bold text-start mb-1"
                  selectArrayOption={selectArrayOption}
                  register={register}
                  errors={error}
                  style="w-full text-start p-3 text-xs border-bottom"
                />
              );
              break;
            default:
              return (
                <InputField
                  key={index}
                  name={title}
                  placeHolder={placeHold}
                  type={type}
                  labelTitle={labelName}
                  labelStyle="text-sm font-bold text-start mb-1"
                  register={register}
                  errors={error}
                  required={required}
                  style="w-full text-start p-3 text-xs border-bottom"
                />
              );
          }
        })}
      </div>
      <div>
        <Text style="font-semibold text-sm mb-4" value="Select Subject?" />
        <div className="flex mb-5 flex-wrap">
          {['Advisory', 'Development', 'Management', 'General EnQuiry'].map(
            (rad, index) => {
              return (
                <InputField
                  key={index}
                  name="subject"
                  value={rad}
                  type="radio"
                  labelTitle={rad}
                  labelStyle="text-xs font-bold text-start text-black mb-1 me-8"
                  register={register}
                  required={true}
                  errors={errors.subject}
                  style="text-start p-3 text-xs me-2"
                />
              );
            }
          )}
        </div>
        <div className="mb-5">
          <InputField
            name="message"
            type="text"
            placeHolder="Write your message"
            labelTitle="Message"
            labelStyle="text-sm font-bold text-start text-black mb-1"
            register={register}
            errors={errors.message}
            required={true}
            style="text-start p-3 text-xs border-bottom me-4"
          />
        </div>
      </div>
      <div>
        <Button
          buttonStyle="px-12 py-2 m-auto bg-dark-moderate"
          textStyle="text-white"
          text="submit"
        />
      </div>
    </form>
  );
};
