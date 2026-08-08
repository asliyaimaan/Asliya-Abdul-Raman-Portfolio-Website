import PageHeader from '@/components/ui/header';
import AboutMe from '@/components/about/aboutMe';
import Education from '@/components/about/education';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080a22] flex flex-col">
      <PageHeader
        title="About"
        maincontent="The person behind the commits"
        description="A short introduction to who I am, how I got into code, and what keeps me building."
      />

      <AboutMe />
      <Education/>
    </div>
  );
}