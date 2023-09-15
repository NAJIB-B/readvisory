import { SubRouteLayout } from '@/components/subRouteLayout';
import bgImg from '../../../public/images/developmentBg.png';
import Development from '@/components/developmentComponent/development';

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
