import { AboutMe } from '@/components/pages/home/about-me';
import { ExperienceTimeline } from '@/components/pages/home/timeline';
import { Testimonials } from '@/components/pages/home/testimonials';
import { Projects } from '@/components/pages/home/projects';
import { HeroFinal } from '@/components/pages/home/HeroFinal';


export default function Home() {

  return (
    <div className="">
      <HeroFinal />
      
      <ExperienceTimeline />
      <AboutMe />
      <Projects />
      <Testimonials />

    </div>
  );
}
