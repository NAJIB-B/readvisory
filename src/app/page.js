import TopSection from '@/components/landingPage/topSection';
import WhoWeAre from '@/components/landingPage/whoWeAre';
import WhatWeDo from '@/components/landingPage/whatWeDo';
import MissionAndVision from '@/components/landingPage/missionAndVision';
import BottomSection from '@/components/landingPage/bottomSection';

export default function Home() {
  return (
    <main>
      <TopSection></TopSection>
      <WhoWeAre></WhoWeAre>
      <WhatWeDo></WhatWeDo>
      <MissionAndVision></MissionAndVision>
      <BottomSection></BottomSection>
    </main>
  );
}
