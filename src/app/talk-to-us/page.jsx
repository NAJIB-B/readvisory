import { SubRouteLayout } from '@/components/subRouteLayout';
import frame from '../../../public/images/talkBG.png';
import { Enquiry } from '@/components/propertyEnquiry/Enquiry';

export const metadata = {
  title: 'Make enquiries and contact us | Readvisory.ng',
  description:
    'Independent property firm, offering real estate investment, finance, development and management services',
  robots: 'all',
  icons: {
    other: {
      rel: 'canonical',
      url: 'https://www.readvisory.ng/talk-to-us#contact-us',
    },
  },
};

export default function TalkToUs() {
  return (
    <SubRouteLayout title="Property Enquiry" bgUrl={frame}>
      <Enquiry />
    </SubRouteLayout>
  );
}
