import TopSection from '@/components/landingPage/topSection';
import WhoWeAre from '@/components/landingPage/whoWeAre';
import WhatWeDo from '@/components/landingPage/whatWeDo';
import MissionAndVision from '@/components/landingPage/missionAndVision';
import BottomSection from '@/components/landingPage/bottomSection';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <TopSection></TopSection>
      <WhoWeAre></WhoWeAre>
      <WhatWeDo></WhatWeDo>
      <MissionAndVision></MissionAndVision>
      <BottomSection></BottomSection>
      <Footer paddingTop={'12rem'}></Footer>
    </main>
  );
}
