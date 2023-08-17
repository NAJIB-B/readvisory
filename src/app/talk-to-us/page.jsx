import { SubRouteLayout } from "@/components/subRouteLayout";
import frame from "../../../public/images/talkBG.png"
import { Enquiry } from "@/components/propertyEnquiry/Enquiry";

export default function TalkToUs (){
  return (
    <SubRouteLayout
      title="Property Enquiry"
      bgUrl={frame}
    >
        <Enquiry/>
    </SubRouteLayout>
  );
};
