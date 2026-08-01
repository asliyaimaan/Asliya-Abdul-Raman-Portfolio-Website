import Hero from '@/components/home/hero';
import QuickTour from '@/components/home/quickTour';
import RecentProjects from '@/components/home/recentProjects';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080a22]">
      <Hero />
      <QuickTour />
      <RecentProjects />
    </div>
  );
}