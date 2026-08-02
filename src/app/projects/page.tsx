import PageHeader from '@/components/ui/header';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#080a22] flex flex-col">
      <PageHeader
        title="Projects"
        maincontent="Things I've built"
        description="Each project follows the same format: a screenshot, what it does, and the stack behind it. This list grows as I ship more."
      />

      <div className="flex-grow flex items-center justify-center py-20 text-center px-6">
        <p className="text-gray-400 max-w-md">
          This page is currently under construction. Check back soon for updates!
        </p>
      </div>
    </div>
  );
}