import { SubRouteLayout } from "@/components/subRouteLayout";
import MgBgimage from "../../../public/images/manageBg.png"
import { ManagementComponent } from "@/components/managementComponent/manage";

export default function Management (){
  return (
    <SubRouteLayout
      title="MANAGEMENT"
      bgUrl={MgBgimage}
    >
        <ManagementComponent/>
    </SubRouteLayout>
  );
};

