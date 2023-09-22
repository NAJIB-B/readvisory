import { SubRouteLayout } from '@/components/subRouteLayout';
import Bgimage from '../../../public/images/and.png';
import { Acquisition } from '@/components/advisoryComponent/acquisition';
import { MortgaugeBody } from '@/components/advisoryComponent/moragugeBody';

export const metadata = {
  title: 'Property advise, asset transfer property management | Advisory',
  description:
    'Independent property firm, offering real estate investment, finance, development and management services',
  robots: 'all',
  icons: {
    other: {
      rel: 'canonical',
      url: 'https://www.readvisory.ng/advisory',
    },
  },
};

export default function Advisory() {
  return (
    <SubRouteLayout title="ADVISORY" bgUrl={Bgimage}>
      <Acquisition />
      <MortgaugeBody/>
    </SubRouteLayout>
  );
}
