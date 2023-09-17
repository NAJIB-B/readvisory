import { SubRouteLayout } from '@/components/subRouteLayout';
import MgBgimage from '../../../public/images/managementBackgroundimg.png';
import { ManagementComponent } from '@/components/managementComponent/manage';

export const metadata = {
  title:
    'Transaction Documentation, Asset Management, Facility Management | Management',
  description:
    'Independent property firm, offering real estate investment, finance, development and management services',
  robots: 'all',
  icons: {
    other: {
      rel: 'canonical',
      url: 'https://www.readvisory.ng/management',
    },
  },
};

export default function Management() {
  return (
    <SubRouteLayout title="MANAGEMENT" bgUrl={MgBgimage}>
      <ManagementComponent />
    </SubRouteLayout>
  );
}
