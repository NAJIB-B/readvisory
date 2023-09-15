import Head from 'next/head';

import { SubRouteLayout } from '@/components/subRouteLayout';
import Bgimage from '../../../public/images/and.png';
import { Acquisition } from '@/components/advisoryComponent/acquisition';

export const metadata = {
  title: 'Property advise, asset transfer property management | Advisory',
  description:
    'Independent property firm, offering real estate investment, finance, development and management services',
};

export default function Advisory() {
  return (
    <SubRouteLayout title="ADVISORY" bgUrl={Bgimage}>
      <Acquisition />
    </SubRouteLayout>
  );
}
