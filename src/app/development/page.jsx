import { SubRouteLayout } from '@/components/subRouteLayout';
import bgImg from '../../../public/images/developmentBg.png';
import Development from '@/components/developmentComponent/development';

export const metadata = {
  title: 'Project management, Renovation, Construction Finance | Development',
  description:
    'Independent property firm, offering real estate investment, finance, development and management services',
  robots: 'all',
  icons: {
    other: {
      rel: 'canonical',
      url: 'https://www.readvisory.ng/development',
    },
  },
};

const DevelopmentPage = () => {
  return (
    <>
      <SubRouteLayout title="DEVELOPMENT" bgUrl={bgImg}>
        <Development></Development>
      </SubRouteLayout>
    </>
  );
};

export default DevelopmentPage;
