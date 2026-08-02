import PageHeader from '@/components/ui/header';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#080a22] flex flex-col">
      <PageHeader
        title="Experience"
        maincontent="Where I've put the theory to work"
        description="Internships and practical roles so far. Hackathons and competitions will land here too as I take part in them."
      />

      <div className="flex-grow flex items-center justify-center py-20 text-center px-6">
        <p className="text-gray-400 max-w-md">
          This page is currently under construction. Check back soon for updates!
        </p>
      </div>
    </div>
  );
}