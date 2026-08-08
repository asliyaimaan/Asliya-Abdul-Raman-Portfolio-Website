import PageHeader from '@/components/ui/header';
import Projects from '@/components/projects/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#080a22] flex flex-col">
      <PageHeader
        title="Projects"
        maincontent="Things I've built"
        description="Each project follows the same format: a screenshot, what it does, and the stack behind it. This list grows as I ship more."
      />

      <Projects/>
    </div>
  );
}