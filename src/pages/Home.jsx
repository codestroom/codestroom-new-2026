import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Highlights from '../components/Highlights';
import BlendLab from '../components/BlendLab';
import CTA from '../components/CTA';
import RobotIntro from '../components/RobotIntro';
import RobotOutro from '../components/RobotOutro';

export default function Home() {
  return (
    <>
      <RobotIntro />
      <Hero />
      <Marquee />
      <Highlights />
      <BlendLab />
      <CTA />
      <RobotOutro />
    </>
  );
}
