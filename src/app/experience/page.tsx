import PageHeader from '@/components/ui/header';
import Experience from '@/components/experience/experience';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#080a22] flex flex-col">
      <PageHeader
        title="Experience"
        maincontent="Where I've put the theory to work"
        description="Internships and practical roles so far. Hackathons and competitions will land here too as I take part in them."
      />

      <Experience/>
    </div>
  );
}