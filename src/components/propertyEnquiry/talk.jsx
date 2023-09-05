'use client';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

import Button from '../button/button';
import { InputField } from '../custormFormField';
import { Text } from '../Text';

export const Talk = () => {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_ENQUIRY_FORM_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      modeOfContact: 'Email',
      contactDetail: '',
      location: '',
      objectives: [],
      roomNo: '',
      modeDescription: '',
    },
  });

  const watchMode = watch('mode');
  const watchContactMode = watch('modeOfContact');
  const SubmitHandler = ({
    contactDetail,
    modeOfContact,
    age,
    objectives,
    purpose,
    location,
    property,
    roomNo,
    mode,
    modeDescription,
    range,
    income,
  }) => {
    emailjs
      .send(
        serviceId,
        templateId,
        {
          contact_mode: modeOfContact,
          contact_detail: contactDetail,
          objectives,
          age,
          purpose,
          location,
          property_type: property,
          room_number: roomNo,
          mode,
          other_mode_of_acquisition: modeDescription,
          range,
          income,
        },
        publicKey
      )
      .then(() => {
        toast.success('Successfully sent');
        resetField('location');
        resetField('objectives');
        resetField('roomNo');
        resetField('contactDetail');
        resetField('modeDescription');
      })
      .catch(() => toast.error('Something went wrong. Try again'));
  };

  const contactModePlaceHolder = () => {
    switch (watchContactMode) {
      case 'Email':
        return 'example@gmail.com';

      case 'Phone number':
        return '08100084849';
        break;
      case 'FaceBook':
        return 'Input your facebook username';
        break;
      case 'Twitter':
        return 'Input your Twitter username';
        break;
        break;
      case 'Instagram':
        return 'Input your Instagram username';
        break;
      case 'Whatsapp':
        return 'Input your whatsapp number';
        break;
      case 'Telegram':
        return 'Input your Telegram number';
        break;

      default:
        break;
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="py-10 formBg px-4"
      >
        <div className="m-auto xxs:w-full xs:w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-28">
          <div className="flex w-full mb-3">
            <div className="w-full">
              <InputField
                name={'modeOfContact'}
                type={'select'}
                labelTitle={'Prefered Mode Of Contact'}
                labelStyle="text-sm font-bold text-start c-mid-grey mb-3"
                selectArrayOption={[
                  'Email',
                  'Phone number',
                  'FaceBook',
                  'Whatsapp',
                  'Twitter',
                  'Instagram',
                  'Telegram',
                ]}
                register={register}
                errors={errors.ModeOfContact}
                style="w-full text-start rounded-md p-3 text-xs border"
              />
            </div>
          </div>
          <div className="flex w-full mb-3">
            <div className="w-full">
              <InputField
                name={'contactDetail'}
                placeHolder={contactModePlaceHolder()}
                type={'text'}
                labelTitle={watchContactMode}
                labelStyle="text-sm font-bold text-start c-mid-grey mb-3"
                register={register}
                errors={errors}
                style="w-full text-start rounded-md p-3 text-xs border"
              />
            </div>
          </div>

          <div className="flex w-full mb-3">
            <div className="w-full">
              <h3 className="font-bold">Objectives</h3>
              {[
                {
                  name: 'Property Acquisition',
                  id: 'Property_Acquisition',
                },
                {
                  name: 'Mortgage/Property Financing',
                  id: 'Mortgage_Property_Financing',
                },
                {
                  name: 'Real Estate Development/Development Planning',
                  id: 'Real_Estate_Development_Development_Planning',
                },
                {
                  name: 'Development Finance',
                  id: 'Development_Finance',
                },
                {
                  name: 'Sale/Transfer',
                  id: 'Sale_Transfer',
                },
                {
                  name: 'Property Lease',
                  id: 'Property_Lease',
                },
                {
                  name: 'Property/Facility Management',
                  id: 'Property_Facility_Management',
                },
                {
                  name: 'Other',
                  id: 'Other',
                },
              ].map((item, key) => {
                return (
                  <InputField
                    key={key}
                    name={'objectives'}
                    type={'checkbox'}
                    labelTitle={item.name}
                    labelStyle=" text-[14px]"
                    register={register}
                    value={item.name}
                    id={item.id}
                    errors={errors.objectives}
                    style=" text-start rounded-md p-3 text-xs border"
                  />
                );
              })}
            </div>
          </div>
          {[
            {
              title: 'age',
              labelName: 'Age',
              selectArrayOption: ['18-30', '30-50', 'Over 50'],
              type: 'select',
              error: errors.age,
              placeHold: 'select age',
              subTitle: null,
            },

            {
              title: 'purpose',
              labelName: 'Purpose',
              selectArrayOption: ['Residential', 'Commercial', 'Mixed Use'],
              type: 'select',
              error: errors.Purpose,
              placeHold: 'select purpose',
              subTitle: null,
            },
            {
              title: 'location',
              labelName: 'Location',
              selectArrayOption: null,
              type: 'text',
              error: errors.location,
              subTitle: '(what city or town is the desired property in)',
              placeHold: 'e.g Abuja',
            },
            {
              title: 'property',
              labelName: 'Property Type',
              selectArrayOption: [
                'Vacant Land',
                'Private Residential Building',
                'Office/Small Business Space',
                'Large Office Complex',
                'Hotel/Hostel/Hospital',
                'Factory/Industrial Complex',
                'Warehouse',
                'Campus Site (e.g. school)',
              ],
              type: 'select',
              error: errors.property,
              placeHold: 'select property',
              subTitle: null,
            },

            {
              title: 'roomNo',
              labelName: 'No.of rooms/ Total Sqm.',
              selectArrayOption: null,
              type: 'number',
              placeHold: 'enter room No',
              error: errors.roomNo,
              subTitle: '(Residential and small business space)',
            },
            {
              title: 'mode',
              labelName: 'Mode of Acquisition',
              selectArrayOption: [
                'Outright Purchase',
                'Mortgage Finance',
                'Rent',
                'Rent - To - Own',
                'Long Term Lease',
                'Other',
              ],
              type: 'select',
              placeHold: 'select mode',
              error: errors.mode,
              subTitle: null,
            },
            {
              title: 'modeDescription',
              labelName: 'Describe Mode of Acquisition',
              selectArrayOption: null,
              type: 'text',
              error: errors.modeDescription,
              subTitle: '(Give a brief explanation on the mode of acquisition)',
              placeHold: '',
              hidden: true,
              toggler: watchMode,
            },
            {
              title: 'range',
              labelName: 'Price Range',
              selectArrayOption: [
                '1,000,000 - 15,000,000',
                '15,000,000 - 50,000,000',
                '50,000,000 - 100,000,000',
                'Over 100,000,000',
              ],
              placeHold: 'select range',
              type: 'select',
              error: errors.range,
              subTitle: null,
            },
            {
              title: 'income',
              labelName: 'Monthly Net income',
              selectArrayOption: [
                'Under 100,0000',
                '100,000 - 1,000,000',
                '1,000,000 - 3,000,000',
                '3,000,000 - 5,000,000',
                'Over 5,000,000',
              ],
              type: 'select',
              placeHold: 'select income',
              error: errors.range,
              subTitle: '(for calculation of marriage repayment)',
            },
          ].map((option, index) => {
            const {
              title,
              labelName,
              subTitle,
              placeHold,
              selectArrayOption,
              type,
              error,
              hidden,
              toggler,
            } = option;
            switch (type) {
              case 'select':
                return (
                  <div className="flex w-full mb-3" key={index}>
                    <div className="w-full">
                      <InputField
                        name={title}
                        type={type}
                        subTitle={subTitle}
                        placeHolder={placeHold}
                        labelTitle={labelName}
                        labelStyle="text-sm font-bold text-start c-mid-grey mb-3"
                        selectArrayOption={selectArrayOption}
                        register={register}
                        errors={error}
                        style="w-full text-start rounded-md p-3 text-xs border"
                      />
                    </div>
                  </div>
                );
                break;
              default:
                return hidden ? (
                  toggler == 'Other' ? (
                    <div className="flex w-full mb-3" key={index}>
                      <div className="w-full">
                        <InputField
                          name={title}
                          subTitle={subTitle}
                          placeHolder={placeHold}
                          type={type}
                          labelTitle={labelName}
                          labelStyle="text-sm font-bold text-start c-mid-grey mb-3"
                          register={register}
                          errors={errors}
                          style="w-full text-start rounded-md p-3 text-xs border"
                        />
                      </div>
                    </div>
                  ) : null
                ) : (
                  <div className="flex w-full mb-3" key={index}>
                    <div className="w-full">
                      <InputField
                        name={title}
                        subTitle={subTitle}
                        placeHolder={placeHold}
                        type={type}
                        labelTitle={labelName}
                        labelStyle="text-sm font-bold text-start c-mid-grey mb-3"
                        register={register}
                        errors={errors}
                        style="w-full text-start rounded-md p-3 text-xs border"
                      />
                    </div>
                  </div>
                );
            }
          })}
        </div>
        <div className="w-fit-content m-auto my-8">
          <Button
            buttonStyle="px-12 py-2 m-auto bg-dark-moderate"
            textStyle="text-white"
            text="submit"
          />
        </div>
      </form>
    </>
  );
};
