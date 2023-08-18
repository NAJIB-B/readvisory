import { SubRouteLayout } from '@/components/subRouteLayout';
import Bgimage from '../../../public/images/manageBG.png';
import { Acquisition } from '@/components/advisoryComponent/acquisition';

export default function Advisory() {
  return (
    <SubRouteLayout title="ADVISORY" bgUrl={Bgimage}>
      <Acquisition />
    </SubRouteLayout>
  );
}
