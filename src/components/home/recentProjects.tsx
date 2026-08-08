import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Aurora Task Dashboard',
    description: 'A full-stack productivity dashboard with real-time task boards, filtering and analytics. Built to practise clean state management and...',
    image: '/images/project-placeholder.jpg',
  },
  {
    title: 'Campus Study Buddy',
    description: 'A matching app that pairs students by course, availability and study style. Includes authentication, a scheduling calendar and emai...',
    image: '/images/project-placeholder.jpg',
  },
  {
    title: 'Pixel Weather CLI',
    description: 'A small command-line weather client with cached requests and a retro pixel-art output mode. A fun exercise in API design and terminal...',
    image: '/images/project-placeholder.jpg',
  },
];

export default function RecentProjects() {
  return (
    <section className="pb-40 px-6 sm:px-12 lg:px-16 w-full bg-[#080a22]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with "All projects" link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-unica tracking-widest text-[#44a5ff] uppercase mb-2 block">
              Selected work
            </span>
            <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold tracking-tight text-white">
              Recent projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-[#c780f8] font-medium text-sm hover:underline transition-all w-fit"
          >
            All projects
          </Link>
        </div>

        {/* 3-Column Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-[#131433] border border-[#31335b] hover:border-[#44a5ff] hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(68,165,255,0.2)] transition-all duration-300 flex flex-col overflow-hidden shadow-xl"
            >
              {/* Project Image Preview Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-[#31335b]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="px-5 py-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#44a5ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}