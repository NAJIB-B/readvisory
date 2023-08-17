import { SubRouteLayout } from "@/components/subRouteLayout";
import Bgimage from "../../../public/images/and.png"
import { Acquisition } from "@/components/advisoryComponent/acquisition";

export default function Advisory (){
  return (
    <SubRouteLayout
      title="ADVISORY"
      bgUrl={Bgimage}
    >
        <Acquisition/>
    </SubRouteLayout>
  );
};
